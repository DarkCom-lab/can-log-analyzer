#!/usr/bin/env python3
"""
Professional CAN Log Analyzer – PyQt5 GUI with all enhancements:
- Dashboard with colored status lights
- Interactive plot (pan/zoom, cursor value display)
- Timeline slider
- Table search/filter
- Export (CSV, PNG, text report)
- Anomaly highlighting (yellow rows + red markers on plot)
- Collapsible dashboard, dark/light theme
"""

import sys, re, os, csv, json, shutil, threading
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlsplit
from typing import Dict, List, Tuple
from collections import namedtuple
from datetime import datetime

from PyQt5.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QGridLayout,
    QPushButton, QSlider, QLabel, QTableWidget, QTableWidgetItem, QHeaderView,
    QFileDialog, QGroupBox, QMessageBox, QAction, QSplitter, QSizePolicy,
    QLineEdit, QCheckBox, QToolBar, QStatusBar, QMenu, QStyle, QFrame,
    QScrollArea, QAbstractItemView
)
from PyQt5.QtCore import Qt, QTimer, pyqtSignal, QRect, QSize, QUrl
from PyQt5.QtGui import QFont, QColor, QBrush, QPalette, QIcon

try:
    from PyQt5.QtWebEngineWidgets import QWebEngineView, QWebEngineSettings
    WEBENGINE_AVAILABLE = True
except ImportError:
    QWebEngineView = None
    QWebEngineSettings = None
    WEBENGINE_AVAILABLE = False
import xml.etree.ElementTree as ET

import matplotlib
matplotlib.use("Qt5Agg")
from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg as FigureCanvas
from matplotlib.backends.backend_qt5agg import NavigationToolbar2QT as NavigationToolbar
from matplotlib.figure import Figure
import matplotlib.pyplot as plt
import numpy as np

###############################################################################
# Embedded 3D viewer helpers
###############################################################################
def resource_path(relative_path: str) -> str:
    """Resolve assets both in source mode and in a PyInstaller bundle."""
    base_path = getattr(sys, "_MEIPASS", os.path.dirname(os.path.abspath(__file__)))
    return os.path.join(base_path, relative_path)


class VehicleViewerRequestHandler(SimpleHTTPRequestHandler):
    """Serve viewer files locally and expose the user's selected GLB at /vehicle.glb."""
    def __init__(self, *args, directory=None, model_path_getter=None, **kwargs):
        self.model_path_getter = model_path_getter
        super().__init__(*args, directory=directory, **kwargs)

    def translate_path(self, path):
        parsed_path = urlsplit(path).path
        if parsed_path == "/vehicle.glb":
            model_path = self.model_path_getter() if self.model_path_getter else None
            if model_path and os.path.isfile(model_path):
                return model_path
            return os.path.join(self.directory or os.getcwd(), "__vehicle_model_not_selected__.glb")
        return super().translate_path(path)

    def log_message(self, format, *args):
        # Avoid writing a line for every viewer asset request to the console.
        pass


###############################################################################
# Data structures & parsing (unchanged)
###############################################################################
SignalDef = namedtuple('SignalDef', ['name', 'mask', 'shift', 'values'])
MessageDef = namedtuple('MessageDef', ['name', 'id', 'signals'])
TraceLine = namedtuple('TraceLine', ['timestamp', 'bus', 'can_id', 'direction', 'dlc', 'data_bytes'])

def _parse_bit_definition(bit_str: str, byte_num: int) -> Tuple[int, int]:
    bit_str = bit_str.strip()
    if len(bit_str) != 8:
        raise ValueError(f"Bit definition must be 8 characters: {bit_str}")
    mask = 0
    lowest_bit = None
    for i, ch in enumerate(bit_str):
        if ch.lower() == 'x':
            continue
        bit_pos = byte_num * 8 + (7 - i)
        mask |= (1 << bit_pos)
        if lowest_bit is None or bit_pos < lowest_bit:
            lowest_bit = bit_pos
    shift = 0 if lowest_bit is None else lowest_bit
    return mask, shift

def parse_catalogue(xml_file: str) -> Dict[int, MessageDef]:
    tree = ET.parse(xml_file)
    root = tree.getroot()
    catalogue = {}
    for msg_elem in root.findall('.//massage') or root.findall('.//message'):
        id_str = msg_elem.get('id', '')
        if not id_str:
            continue
        can_id = int(id_str, 16)
        msg_name = msg_elem.get('name', 'Unknown')
        signals_dict: Dict[str, dict] = {}
        for byte_elem in msg_elem.findall('Byte'):
            byte_num = int(byte_elem.find('Num').text.strip())
            for sig_elem in byte_elem.findall('Signal'):
                bit_str = sig_elem.get('Bit', '')
                mask, shift = _parse_bit_definition(bit_str, byte_num)
                sig_name = sig_elem.find('signal_name').text.strip()
                values = {}
                for val_elem in sig_elem.findall('values'):
                    raw_val_str = val_elem.find('value').text.strip()
                    name_str = val_elem.find('name').text.strip()
                    if '...' in raw_val_str:
                        values['raw'] = name_str
                    else:
                        raw_val = int(raw_val_str)
                        values[raw_val] = name_str
                if sig_name in signals_dict:
                    signals_dict[sig_name]['mask'] |= mask
                    signals_dict[sig_name]['shift'] = min(signals_dict[sig_name]['shift'], shift)
                    if 'raw' in values:
                        signals_dict[sig_name]['values'] = values
                else:
                    signals_dict[sig_name] = {'mask': mask, 'shift': shift, 'values': values}
        signals = []
        for name, info in signals_dict.items():
            signals.append(SignalDef(name, info['mask'], info['shift'], info['values']))
        catalogue[can_id] = MessageDef(msg_name, can_id, signals)
    return catalogue

def parse_trace(file_path: str) -> List[TraceLine]:
    pattern = re.compile(
        r'^\s*([\d.]+)\s+'          # timestamp
        r'(\d+)\s+'                 # bus
        r'(0x[0-9a-fA-F]+)\s+'      # CAN ID
        r'(Rx|Tx)\s+'               # direction
        r'd\s+'                     # 'd'
        r'(\d+)\s+'                 # dlc
        r'\[([^\]]+)\]'             # data
    )
    lines = []
    with open(file_path, 'r') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            m = pattern.match(line)
            if not m:
                print(f"Warning: Could not parse line: {line}", file=sys.stderr)
                continue
            timestamp = float(m.group(1))
            bus = int(m.group(2))
            can_id = int(m.group(3), 16)
            direction = m.group(4)
            dlc = int(m.group(5))
            data_str = m.group(6)
            byte_strs = re.split(r'[,\s]+', data_str.strip())
            data_bytes = [int(b) for b in byte_strs if b]
            lines.append(TraceLine(timestamp, bus, can_id, direction, dlc, data_bytes))
    return lines

def decode_message(data: List[int], msg_def: MessageDef) -> Dict[str, Dict]:
    data64 = 0
    for i, byte in enumerate(data):
        data64 |= (byte << (8 * i))
    decoded = {}
    for sig in msg_def.signals:
        raw_value = (data64 & sig.mask) >> sig.shift
        if 'raw' in sig.values:
            desc = sig.values['raw']
            interpreted = f"{desc}: {raw_value}"
        else:
            interpreted = sig.values.get(raw_value, f"Unknown({raw_value})")
        decoded[sig.name] = {'raw': raw_value, 'interpreted': interpreted}
    return decoded

def analyze_securing_requirement(trace, car_cat, key_cat) -> Tuple[bool, str]:
    press_idx = None
    for idx, tl in enumerate(trace):
        if tl.can_id == 0x23A and tl.can_id in car_cat:
            decoded = decode_message(tl.data_bytes, car_cat[0x23A])
            lock_stat = decoded.get('lock_Button_status', {}).get('interpreted', '')
            if lock_stat == 'pressed':
                press_idx = idx
                break
        elif tl.can_id == 0x723 and tl.can_id in key_cat:
            decoded = decode_message(tl.data_bytes, key_cat[0x723])
            butt = decoded.get('KEY_Butt', {}).get('interpreted', '')
            if butt == 'Lock button':
                press_idx = idx
                break
    if press_idx is None:
        return False, "FAIL: No lock button press detected."
    state = {'key_pos': None, 'drd_status': None, 'key_id': None}
    for i in range(press_idx + 1):
        tl = trace[i]
        msg_def = None
        if tl.can_id in car_cat:
            msg_def = car_cat[tl.can_id]
        elif tl.can_id in key_cat:
            msg_def = key_cat[tl.can_id]
        else:
            continue
        decoded = decode_message(tl.data_bytes, msg_def)
        if tl.can_id == 0x723:
            if 'KEY_Pos' in decoded:
                state['key_pos'] = decoded['KEY_Pos']['interpreted']
            if 'Key_ID' in decoded:
                state['key_id'] = decoded['Key_ID']['raw']
        if tl.can_id == 0x2FC:
            if 'Drd_Status' in decoded:
                state['drd_status'] = decoded['Drd_Status']['interpreted']
        elif tl.can_id == 0x2CA:
            if 'Drd_Status_Cont' in decoded:
                state['drd_status'] = decoded['Drd_Status_Cont']['interpreted']
    cond_key_outside = (state['key_pos'] == 'Outside')
    cond_drd_closed = (state['drd_status'] == 'Closed')
    valid_key = (state['key_id'] == 45896567) or (state['key_id'] == 1000)
    details = []
    details.append(f"Key position: {state['key_pos']} -> {'OK' if cond_key_outside else 'FAIL'}")
    details.append(f"Driver door:  {state['drd_status']} -> {'OK' if cond_drd_closed else 'FAIL'}")
    details.append(f"Key ID:       {state['key_id']} -> {'OK' if valid_key else 'FAIL'}")
    if not (cond_key_outside and cond_drd_closed and valid_key):
        return False, "FAIL: Preconditions not satisfied.\n" + "\n".join(details)
    secured_after = False
    for tl in trace[press_idx:]:
        if tl.can_id == 0x2FC and tl.can_id in car_cat:
            decoded = decode_message(tl.data_bytes, car_cat[0x2FC])
            latch = decoded.get('door_latche_status', {}).get('interpreted', '')
            if latch == 'Secured':
                secured_after = True
                break
    if not secured_after:
        return False, "FAIL: Car did not become 'Secured' after lock press.\n" + "\n".join(details)
    return True, "PASS: Car became 'Secured' after lock press.\n" + "\n".join(details)

###############################################################################
# Helpers for colored dashboard and binary conversion
###############################################################################
def interpret_to_binary(signal_name: str, interpreted: str) -> int:
    """Return 1 for 'high' states, 0 for 'low'."""
    high_keywords = ["opened", "pressed", "secured", "lock button", "unlock button", "3rd button", "outside"]
    low_keywords  = ["closed", "not_pressed", "not actuated", "unlocked", "locked", "selective_unlock", "unsecured", "inside", "unknown"]
    exact_high = {
        "door_latche_status": ["Secured"],
        "Rocker_switch_Status": ["Lock", "Unlock"],
        "KEY_Pos": ["Outside"],
        "KEY_Butt": ["Lock button", "Unlock button", "3rd button"],
    }
    exact_low = {
        "door_latche_status": ["Unlocked", "locked", "Selective_unlock", "Unsecured"],
        "Rocker_switch_Status": ["not_pressed"],
    }
    if signal_name in exact_high and interpreted in exact_high[signal_name]:
        return 1
    if signal_name in exact_low and interpreted in exact_low[signal_name]:
        return 0
    interpreted_lower = interpreted.lower()
    for kw in high_keywords:
        if kw in interpreted_lower:
            return 1
    for kw in low_keywords:
        if kw in interpreted_lower:
            return 0
    return 0

def classify_state(signal_name: str, interpreted: str) -> str:
    """Return 'high', 'low', or 'anomaly' for coloring."""
    if "invalid" in interpreted.lower() or "unknown" in interpreted.lower():
        return "anomaly"
    binary = interpret_to_binary(signal_name, interpreted)
    return "high" if binary == 1 else "low"


# Signal names below are already referenced by this application's dashboard.
# Assumed vehicle layout: left = driver side, right = passenger side.
VEHICLE_SIGNAL_TO_PART = {
    "drd_status": "front-left",
    "drd_status_cont": "front-left",
    "psd_status": "front-right",
    "psd_status_cont": "front-right",
    "drdr_status": "rear-left",
    "drdr_status_cont": "rear-left",
    "psdr_status": "rear-right",
    "psdr_status_cont": "rear-right",
    "bootlid_status": "trunk",
    "bootlid_status_cont": "trunk",
}
VEHICLE_PART_KEYS = ("front-left", "front-right", "rear-left", "rear-right", "trunk")


def vehicle_panel_state_from_text(interpreted: str):
    """Return True=open, False=closed, or None when the text is not an explicit state."""
    text = str(interpreted or "").strip().lower().replace("_", " ")
    if not text or "unknown" in text or "invalid" in text:
        return None
    # Check negative/closed expressions first so 'not open' is not misread.
    closed_words = ("closed", "close", "shut", "not open", "ajar false")
    if any(word in text for word in closed_words):
        return False
    open_words = ("opened", "open", "ajar", "unlatched")
    if any(word in text for word in open_words):
        return True
    return None

###############################################################################
# Custom widget: LED indicator
###############################################################################
class LEDIndicator(QWidget):
    def __init__(self, color=Qt.gray, size=16):
        super().__init__()
        self.color = color
        self.setFixedSize(size, size)

    def setColor(self, color):
        self.color = color
        self.update()

    def paintEvent(self, event):
        from PyQt5.QtGui import QPainter, QBrush
        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing)
        painter.setBrush(QBrush(self.color))
        painter.setPen(Qt.NoPen)
        painter.drawEllipse(1, 1, self.width()-2, self.height()-2)

###############################################################################
# Matplotlib canvas with hover annotation
###############################################################################
class MplCanvas(FigureCanvas):
    def __init__(self, parent=None, width=5, height=3, dpi=100):
        self.fig = Figure(figsize=(width, height), dpi=dpi)
        self.ax = self.fig.add_subplot(111)
        super().__init__(self.fig)
        self.setParent(parent)
        self.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
        self.updateGeometry()
        self.cursor_annotation = None

    def set_cursor_annotation(self, text: str):
        """Update or create a text annotation near the red cursor."""
        if self.cursor_annotation is None:
            self.cursor_annotation = self.ax.text(0, 0, text, bbox=dict(facecolor='white', alpha=0.8),
                                                  fontsize=9, color='red')
        else:
            self.cursor_annotation.set_text(text)
        self.draw_idle()

    def clear_cursor_annotation(self):
        if self.cursor_annotation:
            self.cursor_annotation.remove()
            self.cursor_annotation = None
            self.draw_idle()

###############################################################################
# Main GUI
###############################################################################
class CanAnalyzerGUI(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("CAN Log Analyzer Pro")
        self.setMinimumSize(1500, 850)

        # Data
        self.car_cat: Dict[int, MessageDef] = {}
        self.key_cat: Dict[int, MessageDef] = {}
        self.trace: List[TraceLine] = []
        self.msg_defs: Dict[int, MessageDef] = {}

        # Playback state
        self.current_index = -1
        self.playing = False
        self.timer = QTimer(self)
        self.timer.setSingleShot(True)
        self.timer.timeout.connect(self.advance_one_step)
        self.speed_factor = 1.0

        # Binary plot data + anomalies
        self.binary_plot_data: List[Dict[str, int]] = []
        self.anomaly_flags: List[Dict[str, bool]] = []   # True if signal value is invalid/unknown
        self.signal_names_for_plot = []
        self.vehicle_state_snapshots = []
        self._vehicle_page_loaded = False
        self._vehicle_pending_states = {key: None for key in VEHICLE_PART_KEYS}
        self._vehicle_viewer_server = None
        self._vehicle_viewer_thread = None
        self.vehicle_web_view = None
        self._vehicle_model_path = None
        app_data_root = os.environ.get("LOCALAPPDATA", os.path.join(os.path.expanduser("~"), "AppData", "Local"))
        self._vehicle_model_dir = os.path.join(app_data_root, "CAN Log Analyzer Pro", "models")
        os.makedirs(self._vehicle_model_dir, exist_ok=True)
        self._vehicle_model_path = os.path.join(self._vehicle_model_dir, "vehicle.glb")

        # Dashboard labels + LEDs
        self.dash_widgets: Dict[str, Tuple[QLabel, LEDIndicator, QLabel]] = {}  # name -> (name_label, led, value_label)

        self.build_ui()
        self.apply_theme()

    def build_ui(self):
        central = QWidget()
        self.setCentralWidget(central)
        main_layout = QVBoxLayout(central)

        # ---- Toolbar ----
        toolbar = QToolBar("Main")
        self.addToolBar(toolbar)
        toolbar.addAction(QIcon(), "Load Car XML", lambda: self.load_xml('car'))
        toolbar.addAction(QIcon(), "Load Key XML", lambda: self.load_xml('key'))
        toolbar.addAction(QIcon(), "Load Trace", self.load_trace)
        toolbar.addSeparator()
        toolbar.addAction(QIcon(), "Play/Pause", self.toggle_play_pause)
        toolbar.addAction(QIcon(), "Stop", self.stop)
        toolbar.addAction(QIcon(), "Prev", self.prev_message)
        toolbar.addAction(QIcon(), "Next", self.next_message)
        toolbar.addSeparator()
        self.speed_label = QLabel("Speed: 1.0x")
        self.speed_slider = QSlider(Qt.Horizontal)
        self.speed_slider.setRange(1, 100)
        self.speed_slider.setValue(10)
        self.speed_slider.valueChanged.connect(self.change_speed)
        toolbar.addWidget(self.speed_label)
        toolbar.addWidget(self.speed_slider)
        toolbar.addSeparator()
        self.filter_edit = QLineEdit()
        self.filter_edit.setPlaceholderText("Search (ID, name, signal)...")
        self.filter_edit.textChanged.connect(self.apply_filter)
        toolbar.addWidget(self.filter_edit)
        toolbar.addSeparator()
        export_menu = QMenu("Export")
        export_csv = export_menu.addAction("Table to CSV")
        export_csv.triggered.connect(self.export_csv)
        export_png = export_menu.addAction("Plot to PNG")
        export_png.triggered.connect(self.export_plot)
        export_report = export_menu.addAction("Requirement Report")
        export_report.triggered.connect(self.export_report)
        toolbar.addAction(QIcon(), "Export", export_menu.show)
        toolbar.addSeparator()
        theme_btn = QAction(QIcon(), "Toggle Dark/Light", self)
        theme_btn.triggered.connect(self.toggle_theme)
        toolbar.addAction(theme_btn)
        self.dark_mode = False

        # ---- Central splitter ----
        splitter = QSplitter(Qt.Horizontal)

        # ---- Left: Table + Plot stack ----
        left_widget = QWidget()
        left_layout = QVBoxLayout(left_widget)

        # Table
        self.table = QTableWidget()
        self.table.setColumnCount(8)
        self.table.setHorizontalHeaderLabels([
            "Timestamp", "Bus", "CAN ID", "Dir", "DLC", "Data (hex)", "Message", "Decoded Signals"
        ])
        self.table.horizontalHeader().setSectionResizeMode(QHeaderView.ResizeToContents)
        self.table.horizontalHeader().setStretchLastSection(True)
        self.table.setEditTriggers(QTableWidget.NoEditTriggers)
        self.table.setSelectionBehavior(QTableWidget.SelectRows)
        left_layout.addWidget(self.table)

        # Plot with toolbar
        plot_container = QWidget()
        plot_layout = QVBoxLayout(plot_container)
        self.plot_canvas = MplCanvas(self, width=8, height=4, dpi=100)
        self.plot_toolbar = NavigationToolbar(self.plot_canvas, self)
        plot_layout.addWidget(self.plot_toolbar)
        plot_layout.addWidget(self.plot_canvas)
        left_layout.addWidget(plot_container)

        # Timeline slider
        slider_layout = QHBoxLayout()
        self.timeline_slider = QSlider(Qt.Horizontal)
        self.timeline_slider.setMinimum(0)
        self.timeline_slider.setEnabled(False)
        self.timeline_slider.valueChanged.connect(self.slider_moved)
        self.timeline_label = QLabel("0 / 0")
        slider_layout.addWidget(QLabel("Timeline:"))
        slider_layout.addWidget(self.timeline_slider)
        slider_layout.addWidget(self.timeline_label)
        left_layout.addLayout(slider_layout)

        # ---- Right: signal dashboard + full-height embedded 3D scene ----
        self.dash_panel = QWidget()
        self.dash_panel.setMinimumWidth(390)
        self.dash_panel.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
        dash_panel_layout = QVBoxLayout(self.dash_panel)
        dash_panel_layout.setContentsMargins(6, 6, 6, 6)
        dash_panel_layout.setSpacing(7)

        # GLB loading and dashboard collapse controls stay at the top.
        panel_header = QHBoxLayout()
        self.load_vehicle_model_btn = QPushButton("Load GLB Model…")
        self.load_vehicle_model_btn.setToolTip("Select or replace the animated vehicle model")
        self.load_vehicle_model_btn.clicked.connect(self.load_vehicle_model)
        panel_header.addWidget(self.load_vehicle_model_btn)
        panel_header.addStretch(1)

        self.dash_visible = True
        self.toggle_dash_btn = QPushButton("◀ Collapse")
        self.toggle_dash_btn.clicked.connect(self.toggle_dashboard)
        panel_header.addWidget(self.toggle_dash_btn)
        dash_panel_layout.addLayout(panel_header, 0)

        # Keep the signal grid compact at the top of the panel.
        self.dash_group = QGroupBox("Signal Status")
        self.dash_group.setObjectName("signalStatusGroup")
        self.dash_group.setSizePolicy(QSizePolicy.Preferred, QSizePolicy.Maximum)
        self.dash_grid = QGridLayout()
        self.dash_grid.setContentsMargins(8, 12, 8, 7)
        self.dash_grid.setHorizontalSpacing(8)
        self.dash_grid.setVerticalSpacing(3)
        self.dash_group.setLayout(self.dash_grid)
        dash_panel_layout.addWidget(self.dash_group, 0)

        self.req_label = QLabel("Requirement: not checked yet")
        self.req_label.setObjectName("requirementStatus")
        self.req_label.setFont(QFont("Arial", 12, QFont.Bold))
        self.req_label.setWordWrap(True)
        self.req_label.setMinimumHeight(34)
        self.req_label.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Minimum)
        dash_panel_layout.addWidget(self.req_label, 0)

        # The 3D scene receives all remaining vertical space below Requirement Status.
        # There is deliberately no extra status-label row or stretch after the viewer.
        self.vehicle_scene_group = QGroupBox("3D Vehicle Scene")
        self.vehicle_scene_group.setObjectName("vehicleSceneGroup")
        self.vehicle_scene_group.setMinimumHeight(0)
        self.vehicle_scene_group.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
        vehicle_scene_layout = QVBoxLayout(self.vehicle_scene_group)
        vehicle_scene_layout.setContentsMargins(4, 8, 4, 4)
        vehicle_scene_layout.setSpacing(0)

        self.vehicle_web_view = None
        self._build_embedded_vehicle_viewer(vehicle_scene_layout, self.vehicle_scene_group)
        dash_panel_layout.addWidget(self.vehicle_scene_group, 1)

        splitter.addWidget(left_widget)
        splitter.addWidget(self.dash_panel)
        splitter.setChildrenCollapsible(False)
        splitter.setSizes([1020, 440])

        # Keep the original single-page CAN Analysis workspace; the 3D scene is
        # integrated into its right dashboard rather than opened as a second tab.
        main_layout.addWidget(splitter)

        self.statusBar().showMessage("Ready. Load catalogues and trace to begin.")
        self.build_dashboard()

    # ---- Embedded 3D vehicle viewer ----
    def _start_vehicle_viewer_server(self):
        if self._vehicle_viewer_server is not None:
            return
        viewer_dir = resource_path("can_analyzer_3d_viewer")
        if not os.path.isdir(viewer_dir):
            raise FileNotFoundError(f"3D viewer assets not found: {viewer_dir}")
        handler = partial(
            VehicleViewerRequestHandler,
            directory=viewer_dir,
            model_path_getter=lambda: self._vehicle_model_path
        )
        self._vehicle_viewer_server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
        self._vehicle_viewer_server.daemon_threads = True
        self._vehicle_viewer_thread = threading.Thread(
            target=self._vehicle_viewer_server.serve_forever,
            name="CANVehicleViewerHTTP",
            daemon=True
        )
        self._vehicle_viewer_thread.start()
        self._vehicle_viewer_url = f"http://127.0.0.1:{self._vehicle_viewer_server.server_address[1]}/index.html"

    def _set_vehicle_status(self, message):
        """Report viewer state in the Qt status bar without taking scene space."""
        if hasattr(self, "statusBar"):
            self.statusBar().showMessage(str(message), 6000)

    def _build_embedded_vehicle_viewer(self, layout, parent):
        """Insert an expanding 3D scene below Requirement Status."""
        if not WEBENGINE_AVAILABLE:
            message = QLabel(
                "The 3D scene requires PyQtWebEngine.\n"
                "Install it with: python -m pip install PyQtWebEngine"
            )
            message.setObjectName("vehicleViewerMessage")
            message.setAlignment(Qt.AlignCenter)
            message.setWordWrap(True)
            message.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
            layout.addWidget(message, 1)
            self.load_vehicle_model_btn.setEnabled(False)
            self._set_vehicle_status("3D viewer unavailable: PyQtWebEngine is not installed.")
            return

        viewer_dir = resource_path("can_analyzer_3d_viewer")
        viewer_bundle = os.path.join(viewer_dir, "viewer.bundle.js")
        if not os.path.isfile(viewer_bundle):
            message = QLabel(
                "The Three.js viewer bundle has not been built yet.\n"
                "Run .\\prepare_threejs_viewer.ps1 from the project folder."
            )
            message.setObjectName("vehicleViewerMessage")
            message.setAlignment(Qt.AlignCenter)
            message.setWordWrap(True)
            message.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
            layout.addWidget(message, 1)
            self.load_vehicle_model_btn.setEnabled(False)
            self._set_vehicle_status("Viewer bundle missing. Build the local Three.js bundle first.")
            return

        try:
            self._start_vehicle_viewer_server()
            self.vehicle_web_view = QWebEngineView(parent)
            self.vehicle_web_view.setMinimumSize(0, 0)
            self.vehicle_web_view.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
            settings = self.vehicle_web_view.settings()
            settings.setAttribute(QWebEngineSettings.JavascriptEnabled, True)
            settings.setAttribute(QWebEngineSettings.LocalContentCanAccessRemoteUrls, True)
            self.vehicle_web_view.loadFinished.connect(self._on_vehicle_page_loaded)
            self.vehicle_web_view.setUrl(QUrl(self._vehicle_viewer_url))
            layout.addWidget(self.vehicle_web_view, 1)
            if os.path.isfile(self._vehicle_model_path):
                self._set_vehicle_status("Previously selected GLB found. Loading it into the scene…")
            else:
                self._set_vehicle_status("Load an animated .glb model to display the vehicle.")
        except Exception as exc:
            self.vehicle_web_view = None
            self.load_vehicle_model_btn.setEnabled(False)
            message = QLabel("Could not initialize the 3D viewer: " + str(exc))
            message.setObjectName("vehicleViewerMessage")
            message.setWordWrap(True)
            message.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
            layout.addWidget(message, 1)
            self._set_vehicle_status("3D viewer initialization failed.")

    def _on_vehicle_page_loaded(self, ok):
        self._vehicle_page_loaded = bool(ok)
        if not ok:
            self._set_vehicle_status(
                "The 3D vehicle scene could not load. Check the bundled viewer assets and PyQtWebEngine installation."
            )
            return
        if os.path.isfile(self._vehicle_model_path):
            self._load_vehicle_model_into_page()
        self.update_vehicle_view(self._vehicle_pending_states)

    def load_vehicle_model(self):
        path, _ = QFileDialog.getOpenFileName(
            self, "Select animated vehicle model", "",
            "glTF Binary Model (*.glb);;All Files (*)"
        )
        if not path:
            return
        if not path.lower().endswith(".glb"):
            QMessageBox.warning(self, "Unsupported model", "Please select a binary glTF .glb file.")
            return
        try:
            os.makedirs(self._vehicle_model_dir, exist_ok=True)
            shutil.copy2(path, self._vehicle_model_path)
            self._set_vehicle_status(f"Model selected: {os.path.basename(path)}")
            if self._vehicle_page_loaded:
                self._load_vehicle_model_into_page()
            else:
                QMessageBox.information(
                    self, "Model saved",
                    "The GLB model has been saved. It will load when the 3D viewer page is ready."
                )
        except Exception as exc:
            QMessageBox.critical(self, "GLB load error", f"Could not copy the model:\n{exc}")

    def _load_vehicle_model_into_page(self):
        if not self.vehicle_web_view or not self._vehicle_page_loaded:
            return
        payload = json.dumps(self._vehicle_pending_states)
        js = (
            "window.loadVehicleModel && window.loadVehicleModel("
            "'/vehicle.glb?cache=' + Date.now(), " + payload + ");"
        )
        self.vehicle_web_view.page().runJavaScript(js)
        self._set_vehicle_status("Loading animated GLB model into the CAN Analysis dashboard…")

    def update_vehicle_view(self, states):
        """Send cumulative door/trunk states derived from the current trace position."""
        self._vehicle_pending_states = {key: states.get(key) for key in VEHICLE_PART_KEYS}
        if self.vehicle_web_view and self._vehicle_page_loaded:
            payload = json.dumps(self._vehicle_pending_states)
            self.vehicle_web_view.page().runJavaScript(
                f"window.setCanStates && window.setCanStates({payload});"
            )

    def reset_vehicle_view(self):
        self._vehicle_pending_states = {key: None for key in VEHICLE_PART_KEYS}
        if self.vehicle_web_view and self._vehicle_page_loaded:
            self.vehicle_web_view.page().runJavaScript(
                "window.resetVehicleView && window.resetVehicleView();"
            )

    def closeEvent(self, event):
        try:
            if self._vehicle_viewer_server is not None:
                self._vehicle_viewer_server.shutdown()
                self._vehicle_viewer_server.server_close()
                self._vehicle_viewer_server = None
        except Exception:
            pass
        super().closeEvent(event)

    # ---- Dashboard with LEDs ----
    def build_dashboard(self):
        signals_of_interest = [
            "door_latche_status", "selective_unlock_statuss",
            "Drd_Status", "PSD_Status", "DRDR_Status", "Psdr_Status",
            "Bootlid_Status", "Rocker_switch_Status",
            "Drd_Status_Cont", "PSD_Status_Cont", "DRDR_Status_Cont",
            "Psdr_Status_Cont", "Bootlid_Status_Cont",
            "KEY_Pos", "KEY_Butt", "Key_ID",
            "lock_Button_status", "Unlock_Button_status", "3rd_Button_status"
        ]
        # Clear existing grid
        while self.dash_grid.count():
            item = self.dash_grid.takeAt(0)
            if item.widget():
                item.widget().deleteLater()
        self.dash_widgets.clear()
        row, col = 0, 0
        for sig in signals_of_interest:
            name_lbl = QLabel(sig)
            name_lbl.setStyleSheet("font-weight: bold; font-size: 9px;")
            led = LEDIndicator(Qt.gray, 12)
            value_lbl = QLabel("--")
            value_lbl.setStyleSheet("font-size: 9px;")
            self.dash_grid.addWidget(name_lbl, row, col*3)
            self.dash_grid.addWidget(led, row, col*3+1)
            self.dash_grid.addWidget(value_lbl, row, col*3+2)
            self.dash_widgets[sig] = (name_lbl, led, value_lbl)
            col += 1
            if col == 2:
                col = 0
                row += 1

    def update_dashboard_leds(self, decoded: Dict[str, Dict]):
        """Refresh LED colors and text from decoded message."""
        for sig_name, val_dict in decoded.items():
            if sig_name in self.dash_widgets:
                interpreted = val_dict['interpreted']
                state = classify_state(sig_name, interpreted)
                color = Qt.gray
                if state == 'high':
                    color = QColor(255, 165, 0)  # orange
                elif state == 'low':
                    color = QColor(0, 200, 0)    # green
                elif state == 'anomaly':
                    color = QColor(255, 0, 0)    # red
                name_lbl, led, value_lbl = self.dash_widgets[sig_name]
                led.setColor(color)
                value_lbl.setText(interpreted)

    def reset_dashboard_leds(self):
        for sig_name, (name_lbl, led, value_lbl) in self.dash_widgets.items():
            led.setColor(Qt.gray)
            value_lbl.setText("--")

    # ---- File loading ----
    def load_xml(self, which: str):
        path, _ = QFileDialog.getOpenFileName(self, f"Open {which.upper()} XML", "", "XML Files (*.xml);;All Files (*)")
        if not path:
            return
        try:
            cat = parse_catalogue(path)
            if which == 'car':
                self.car_cat = cat
            else:
                self.key_cat = cat
            self.merge_defs()
            QMessageBox.information(self, "Loaded", f"{len(cat)} messages loaded.")
        except Exception as e:
            QMessageBox.critical(self, "Error", str(e))

    def load_trace(self):
        path, _ = QFileDialog.getOpenFileName(self, "Open Trace Log", "", "Log Files (*.log *.txt);;All Files (*)")
        if not path:
            return
        try:
            self.trace = parse_trace(path)
            self.merge_defs()
            self.compute_binary_data()
            self.populate_table()
            self.reset_playback()
            self.initialize_plot()
            self.update_timeline_range()
            QMessageBox.information(self, "Loaded", f"{len(self.trace)} messages loaded.")
        except Exception as e:
            QMessageBox.critical(self, "Error", str(e))

    def merge_defs(self):
        self.msg_defs = {}
        self.msg_defs.update(self.car_cat)
        self.msg_defs.update(self.key_cat)

    def compute_binary_data(self):
        self.binary_plot_data = []
        self.anomaly_flags = []
        self.vehicle_state_snapshots = []
        vehicle_state = {key: None for key in VEHICLE_PART_KEYS}
        all_sigs = set()
        for tl in self.trace:
            bin_dict = {}
            anom_dict = {}
            if tl.can_id in self.msg_defs:
                msg_def = self.msg_defs[tl.can_id]
                decoded = decode_message(tl.data_bytes, msg_def)
                for sig_name, val_dict in decoded.items():
                    interpreted = val_dict['interpreted']
                    binary = interpret_to_binary(sig_name, interpreted)
                    bin_dict[sig_name] = binary
                    anom_dict[sig_name] = ("invalid" in interpreted.lower() or "unknown" in interpreted.lower())
                    all_sigs.add(sig_name)
                    part_key = VEHICLE_SIGNAL_TO_PART.get(sig_name.lower())
                    if part_key:
                        panel_state = vehicle_panel_state_from_text(interpreted)
                        if panel_state is not None:
                            vehicle_state[part_key] = panel_state
            self.binary_plot_data.append(bin_dict)
            self.anomaly_flags.append(anom_dict)
            # Snapshot the latest known status of every panel at this trace index.
            self.vehicle_state_snapshots.append(dict(vehicle_state))
        interest = [
            "door_latche_status", "selective_unlock_statuss",
            "Drd_Status", "PSD_Status", "DRDR_Status", "Psdr_Status",
            "Bootlid_Status", "Rocker_switch_Status",
            "Drd_Status_Cont", "PSD_Status_Cont", "DRDR_Status_Cont",
            "Psdr_Status_Cont", "Bootlid_Status_Cont",
            "KEY_Pos", "KEY_Butt",
            "lock_Button_status", "Unlock_Button_status", "3rd_Button_status"
        ]
        self.signal_names_for_plot = [s for s in interest if s in all_sigs]

    def initialize_plot(self):
        self.plot_canvas.ax.clear()
        self.plot_canvas.cursor_annotation = None
        times = [tl.timestamp for tl in self.trace]
        if not self.signal_names_for_plot:
            self.plot_canvas.ax.text(0.5, 0.5, "No signals found",
                                     transform=self.plot_canvas.ax.transAxes, ha='center', va='center')
            self.apply_plot_theme()
            self.plot_canvas.draw()
            return

        offset_step = 2
        offsets = {}
        for i, sig_name in enumerate(self.signal_names_for_plot):
            offsets[sig_name] = i * offset_step

        colors = plt.cm.tab10.colors
        self.plot_lines = {}
        y_tick_positions = []
        y_tick_labels = []

        for i, sig_name in enumerate(self.signal_names_for_plot):
            values = [d.get(sig_name, 0) for d in self.binary_plot_data]
            offset = offsets[sig_name]
            shifted = [v + offset for v in values]
            line, = self.plot_canvas.ax.step(times, shifted, where='post',
                                             color=colors[i % len(colors)], linewidth=2.0, alpha=0.9)
            self.plot_lines[sig_name] = line
            # Anomaly markers
            anomaly_times, anomaly_vals = [], []
            for idx, t in enumerate(times):
                if self.anomaly_flags[idx].get(sig_name, False):
                    anomaly_times.append(t)
                    anomaly_vals.append(shifted[idx])
            if anomaly_times:
                self.plot_canvas.ax.scatter(anomaly_times, anomaly_vals, color='red', marker='x', s=40, zorder=10)
            y_tick_positions.append(offset + 0.5)
            y_tick_labels.append(sig_name)

        self.plot_canvas.ax.set_yticks(y_tick_positions)
        self.plot_canvas.ax.set_yticklabels(y_tick_labels, fontsize=8)
        min_y, max_y = 0, offset_step * (len(self.signal_names_for_plot)-1) + 1
        self.plot_canvas.ax.set_ylim(min_y-0.5, max_y+0.5)
        self.plot_canvas.ax.set_xlabel("Time (s)")
        self.plot_canvas.ax.grid(True, linestyle=':', alpha=0.6)
        self.cursor_line = self.plot_canvas.ax.axvline(x=times[0] if times else 0, color='red', linestyle='--', linewidth=2)
        self.plot_canvas.fig.tight_layout()

        # Connect hover event for cursor annotation
        self.plot_canvas.mpl_connect('motion_notify_event', self.on_plot_hover)
        self.apply_plot_theme()
        self.plot_canvas.draw()

    def on_plot_hover(self, event):
        if event.inaxes != self.plot_canvas.ax or not self.signal_names_for_plot:
            self.plot_canvas.clear_cursor_annotation()
            return
        t = event.xdata
        if t is None:
            self.plot_canvas.clear_cursor_annotation()
            return
        # Find nearest index
        times = [tl.timestamp for tl in self.trace]
        if not times:
            return
        idx = np.argmin(np.abs(np.array(times) - t))
        # Build annotation text
        lines = []
        for sig_name in self.signal_names_for_plot:
            if idx < len(self.binary_plot_data):
                bin_val = self.binary_plot_data[idx].get(sig_name, 0)
                state = "HIGH" if bin_val else "LOW"
                lines.append(f"{sig_name}: {state}")
        text = "\n".join(lines)
        # Position annotation near cursor
        self.plot_canvas.ax.set_title("")  # avoid title clutter
        self.plot_canvas.set_cursor_annotation(text)
        self.apply_plot_theme()

    def update_plot_cursor(self):
        if self.current_index < 0 or self.current_index >= len(self.trace):
            return
        t = self.trace[self.current_index].timestamp
        self.cursor_line.set_xdata([t])
        self.plot_canvas.draw_idle()

    # ---- Table population & filtering ----
    def populate_table(self):
        self.table.setRowCount(len(self.trace))
        for i, tl in enumerate(self.trace):
            self.table.setItem(i, 0, QTableWidgetItem(f"{tl.timestamp:.6f}"))
            self.table.setItem(i, 1, QTableWidgetItem(str(tl.bus)))
            self.table.setItem(i, 2, QTableWidgetItem(f"0x{tl.can_id:X}"))
            self.table.setItem(i, 3, QTableWidgetItem(tl.direction))
            self.table.setItem(i, 4, QTableWidgetItem(str(tl.dlc)))
            data_hex = "[" + ", ".join(f"0x{b:02X}" for b in tl.data_bytes) + "]"
            self.table.setItem(i, 5, QTableWidgetItem(data_hex))
            if tl.can_id in self.msg_defs:
                msg_def = self.msg_defs[tl.can_id]
                msg_name = msg_def.name
                decoded = decode_message(tl.data_bytes, msg_def)
                sig_str = "; ".join(f"{k}: {v['interpreted']}" for k, v in decoded.items())
                self.table.setItem(i, 6, QTableWidgetItem(msg_name))
                self.table.setItem(i, 7, QTableWidgetItem(sig_str))
                # Anomaly marking
                has_anomaly = any("invalid" in v['interpreted'].lower() or "unknown" in v['interpreted'].lower()
                                  for v in decoded.values())
                if has_anomaly:
                    # Keep anomaly rows readable in both themes while preserving
                    # their warning emphasis.
                    if getattr(self, "dark_mode", False):
                        anomaly_bg = QColor("#5a451b")
                        anomaly_fg = QColor("#fff0c2")
                    else:
                        anomaly_bg = QColor("#fff2b3")
                        anomaly_fg = QColor("#5c4211")
                    for col in range(8):
                        cell = self.table.item(i, col)
                        if cell is not None:
                            cell.setBackground(anomaly_bg)
                            cell.setForeground(anomaly_fg)
            else:
                self.table.setItem(i, 6, QTableWidgetItem("Unknown"))
                self.table.setItem(i, 7, QTableWidgetItem(""))
        self.table.setSortingEnabled(False)  # avoid messing with row order

    def apply_filter(self, text):
        text = text.lower()
        for row in range(self.table.rowCount()):
            match = False
            if not text:
                match = True
            else:
                for col in range(self.table.columnCount()):
                    item = self.table.item(row, col)
                    if item and text in item.text().lower():
                        match = True
                        break
            self.table.setRowHidden(row, not match)

    # ---- Timeline slider ----
    def update_timeline_range(self):
        n = len(self.trace)
        self.timeline_slider.setMaximum(max(0, n-1))
        self.timeline_slider.setValue(0 if n > 0 else 0)
        self.timeline_slider.setEnabled(n > 0)
        self.timeline_label.setText(f"0 / {n}")

    def slider_moved(self, value):
        if not self.trace or self.current_index == value:
            return
        self.current_index = value
        self.process_current_message()
        self.highlight_row(self.current_index)
        self.update_plot_cursor()
        self.timeline_label.setText(f"{self.current_index+1} / {len(self.trace)}")

    # ---- Playback controls ----
    def reset_playback(self):
        self.playing = False
        self.timer.stop()
        self.current_index = -1
        self.reset_dashboard_leds()
        self.req_label.setText("Requirement: not checked yet")
        self.req_label.setStyleSheet("")
        self.table.clearSelection()
        self.reset_vehicle_view()
        if hasattr(self, 'cursor_line'):
            self.cursor_line.set_xdata([0])
            self.plot_canvas.draw_idle()
        self.timeline_slider.setValue(0)

    def toggle_play_pause(self):
        if not self.trace:
            return
        if self.playing:
            self.playing = False
            self.timer.stop()
        else:
            if self.current_index >= len(self.trace) - 1:
                self.current_index = -1
            self.playing = True
            self.advance_one_step()

    def stop(self):
        self.playing = False
        self.timer.stop()
        self.current_index = -1
        self.reset_dashboard_leds()
        self.req_label.setText("Requirement: not checked yet")
        self.req_label.setStyleSheet("")
        self.table.clearSelection()
        self.reset_vehicle_view()
        if hasattr(self, 'cursor_line'):
            self.cursor_line.set_xdata([0])
            self.plot_canvas.draw_idle()
        self.timeline_slider.setValue(0)

    def advance_one_step(self):
        if self.current_index < len(self.trace) - 1:
            self.current_index += 1
            self.process_current_message()
            self.highlight_row(self.current_index)
            self.update_plot_cursor()
            self.timeline_slider.blockSignals(True)
            self.timeline_slider.setValue(self.current_index)
            self.timeline_label.setText(f"{self.current_index+1} / {len(self.trace)}")
            self.timeline_slider.blockSignals(False)
            if self.playing:
                if self.current_index < len(self.trace) - 1:
                    delta = self.trace[self.current_index+1].timestamp - self.trace[self.current_index].timestamp
                    delay_ms = max(0, int(delta * 1000 / self.speed_factor))
                else:
                    delay_ms = 0
                self.timer.start(delay_ms)
            if self.current_index == len(self.trace) - 1:
                self.playing = False
                self.timer.stop()
                self.run_requirement_check()

    def next_message(self):
        if not self.trace or self.current_index >= len(self.trace) - 1:
            return
        self.playing = False
        self.timer.stop()
        self.current_index += 1
        self.process_current_message()
        self.highlight_row(self.current_index)
        self.update_plot_cursor()
        self.timeline_slider.setValue(self.current_index)
        self.timeline_label.setText(f"{self.current_index+1} / {len(self.trace)}")
        if self.current_index == len(self.trace) - 1:
            self.run_requirement_check()

    def prev_message(self):
        if not self.trace or self.current_index <= 0:
            return
        self.playing = False
        self.timer.stop()
        self.current_index -= 1
        self.process_current_message()
        self.highlight_row(self.current_index)
        self.update_plot_cursor()
        self.timeline_slider.setValue(self.current_index)
        self.timeline_label.setText(f"{self.current_index+1} / {len(self.trace)}")

    def process_current_message(self):
        if self.current_index < 0 or self.current_index >= len(self.trace):
            return
        tl = self.trace[self.current_index]
        if tl.can_id in self.msg_defs:
            msg_def = self.msg_defs[tl.can_id]
            decoded = decode_message(tl.data_bytes, msg_def)
            self.update_dashboard_leds(decoded)
        if self.current_index < len(self.vehicle_state_snapshots):
            self.update_vehicle_view(self.vehicle_state_snapshots[self.current_index])

    def highlight_row(self, idx):
        self.table.selectRow(idx)
        self.table.scrollToItem(self.table.item(idx, 0))

    def change_speed(self, value):
        self.speed_factor = value / 10.0
        self.speed_label.setText(f"Speed: {self.speed_factor:.1f}x")

    # ---- Export ----
    def export_csv(self):
        path, _ = QFileDialog.getSaveFileName(self, "Export Table to CSV", "", "CSV Files (*.csv)")
        if not path:
            return
        with open(path, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(["Timestamp", "Bus", "CAN ID", "Dir", "DLC", "Data", "Message", "Signals"])
            for row in range(self.table.rowCount()):
                if self.table.isRowHidden(row):
                    continue
                row_data = []
                for col in range(self.table.columnCount()):
                    item = self.table.item(row, col)
                    row_data.append(item.text() if item else "")
                writer.writerow(row_data)
        QMessageBox.information(self, "Export", f"CSV saved to {path}")

    def export_plot(self):
        path, _ = QFileDialog.getSaveFileName(self, "Export Plot as PNG", "", "PNG Files (*.png)")
        if not path:
            return
        self.plot_canvas.fig.savefig(path, dpi=150)
        QMessageBox.information(self, "Export", f"Plot saved to {path}")

    def export_report(self):
        if not self.trace or not self.car_cat or not self.key_cat:
            QMessageBox.warning(self, "Export", "No data to check.")
            return
        passed, details = analyze_securing_requirement(self.trace, self.car_cat, self.key_cat)
        path, _ = QFileDialog.getSaveFileName(self, "Save Requirement Report", "", "Text Files (*.txt)")
        if not path:
            return
        with open(path, 'w') as f:
            f.write(f"Requirement Check Report\n{'='*30}\n")
            f.write(f"Result: {'PASSED' if passed else 'FAILED'}\n\n")
            f.write(details)
        QMessageBox.information(self, "Export", f"Report saved to {path}")

    # ---- Requirement check ----
    def run_requirement_check(self):
        if not self.trace or not self.car_cat or not self.key_cat:
            return
        passed, details = analyze_securing_requirement(self.trace, self.car_cat, self.key_cat)
        self.req_label.setText("REQUIREMENT: PASSED" if passed else "REQUIREMENT: FAILED")
        self.apply_requirement_status_theme()
        QMessageBox.information(self, "Requirement Result", details)

    # ---- Dashboard collapse ----
    def toggle_dashboard(self):
        self.dash_visible = not self.dash_visible
        self.dash_group.setVisible(self.dash_visible)
        self.toggle_dash_btn.setText("◀ Collapse" if self.dash_visible else "▶ Expand")

    # ---- Dark/Light theme ----
    def light_theme(self):
        return """
        QMainWindow, QWidget {
            background-color: #f3f5f7;
            color: #26323b;
        }
        QToolBar {
            background: #e8edf1;
            border: 0;
            border-bottom: 1px solid #cbd4da;
            spacing: 5px;
            padding: 5px;
        }
        QToolBar::separator { background: #c8d1d7; width: 1px; margin: 4px 6px; }
        QToolButton, QPushButton {
            background: #ffffff;
            color: #26323b;
            border: 1px solid #c7d1d8;
            border-radius: 4px;
            padding: 5px 9px;
        }
        QToolButton:hover, QPushButton:hover { background: #e9f0f4; border-color: #94aab7; }
        QToolButton:pressed, QPushButton:pressed { background: #dce6ec; }
        QToolButton:disabled, QPushButton:disabled { color: #9aa5ac; background: #edf0f2; }
        QLineEdit {
            background: #ffffff; color: #26323b;
            border: 1px solid #c7d1d8; border-radius: 4px; padding: 5px 7px;
            selection-background-color: #b8d4e5;
        }
        QLineEdit:focus { border: 1px solid #668fa6; }
        QSlider::groove:horizontal { height: 5px; background: #cbd5dc; border-radius: 2px; }
        QSlider::sub-page:horizontal { background: #739cb2; border-radius: 2px; }
        QSlider::handle:horizontal { background: #ffffff; border: 1px solid #8299a6; width: 13px; margin: -5px 0; border-radius: 6px; }
        QTableWidget, QTreeWidget, QListWidget {
            background: #ffffff; alternate-background-color: #f2f5f7;
            color: #26323b; gridline-color: #d9e0e5;
            border: 1px solid #cbd4da; selection-background-color: #c9dfed;
            selection-color: #1e2b34;
        }
        QTableWidget::item { padding: 3px; }
        QHeaderView::section {
            background: #e7edf1; color: #34434d;
            border: 0; border-right: 1px solid #cbd4da;
            border-bottom: 1px solid #cbd4da; padding: 5px;
        }
        QTableCornerButton::section { background: #e7edf1; border: 0; }
        QGroupBox {
            background: #f8fafb; color: #26323b;
            border: 1px solid #cbd5dc; border-radius: 5px;
            margin-top: 9px; padding-top: 5px;
        }
        QGroupBox::title { subcontrol-origin: margin; left: 8px; padding: 0 4px; }
        QLabel { background: transparent; color: #26323b; }
        QLabel#requirementStatus { color: #26323b; padding: 3px 2px; }
        QLabel#vehicleViewerMessage {
            background: #eef2f5; color: #42525e;
            border: 1px dashed #b8c6cf; border-radius: 4px; padding: 18px;
        }
        QScrollArea { background: #f3f5f7; border: 0; }
        QScrollBar:vertical { background: #edf1f4; width: 12px; margin: 0; }
        QScrollBar::handle:vertical { background: #bdc9d1; min-height: 24px; border-radius: 5px; }
        QScrollBar::handle:vertical:hover { background: #9fadb7; }
        QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical { height: 0; }
        QScrollBar:horizontal { background: #edf1f4; height: 12px; margin: 0; }
        QScrollBar::handle:horizontal { background: #bdc9d1; min-width: 24px; border-radius: 5px; }
        QScrollBar::add-line:horizontal, QScrollBar::sub-line:horizontal { width: 0; }
        QMenu { background: #ffffff; color: #26323b; border: 1px solid #cbd4da; padding: 4px; }
        QMenu::item { padding: 5px 24px 5px 20px; }
        QMenu::item:selected { background: #e2edf3; color: #1e2b34; }
        QStatusBar { background: #e8edf1; color: #43525d; border-top: 1px solid #cbd4da; }
        QStatusBar::item { border: 0; }
        QSplitter::handle { background: #d4dde2; }
        QSplitter::handle:hover { background: #9eb2be; }
        QToolTip { background: #fffbe8; color: #27333b; border: 1px solid #c8bd91; padding: 4px; }
        """

    def dark_theme(self):
        return """
        QMainWindow, QWidget {
            background-color: #202831;
            color: #e0e7ec;
        }
        QToolBar {
            background: #18212a;
            border: 0;
            border-bottom: 1px solid #394651;
            spacing: 5px;
            padding: 5px;
        }
        QToolBar::separator { background: #43515c; width: 1px; margin: 4px 6px; }
        QToolButton, QPushButton {
            background: #303c47;
            color: #e0e7ec;
            border: 1px solid #4a5965;
            border-radius: 4px;
            padding: 5px 9px;
        }
        QToolButton:hover, QPushButton:hover { background: #3a4b58; border-color: #718999; }
        QToolButton:pressed, QPushButton:pressed { background: #26343e; }
        QToolButton:disabled, QPushButton:disabled { color: #77848d; background: #28323a; border-color: #36424b; }
        QLineEdit {
            background: #151d25; color: #e0e7ec;
            border: 1px solid #465560; border-radius: 4px; padding: 5px 7px;
            selection-background-color: #42677d;
        }
        QLineEdit:focus { border: 1px solid #83a9bd; }
        QSlider::groove:horizontal { height: 5px; background: #485661; border-radius: 2px; }
        QSlider::sub-page:horizontal { background: #78a9c0; border-radius: 2px; }
        QSlider::handle:horizontal { background: #dce6ec; border: 1px solid #8199a7; width: 13px; margin: -5px 0; border-radius: 6px; }
        QTableWidget, QTreeWidget, QListWidget {
            background: #18212a; alternate-background-color: #202b35;
            color: #dfe7ec; gridline-color: #394752;
            border: 1px solid #3e4c57; selection-background-color: #36576b;
            selection-color: #ffffff;
        }
        QTableWidget::item { padding: 3px; }
        QHeaderView::section {
            background: #2a3742; color: #d7e0e6;
            border: 0; border-right: 1px solid #46545f;
            border-bottom: 1px solid #46545f; padding: 5px;
        }
        QTableCornerButton::section { background: #2a3742; border: 0; }
        QGroupBox {
            background: #242f39; color: #e0e7ec;
            border: 1px solid #43515c; border-radius: 5px;
            margin-top: 9px; padding-top: 5px;
        }
        QGroupBox::title { subcontrol-origin: margin; left: 8px; padding: 0 4px; }
        QLabel { background: transparent; color: #dce4e9; }
        QLabel#requirementStatus { color: #e0e7ec; padding: 3px 2px; }
        QLabel#vehicleViewerMessage {
            background: #18232c; color: #c8d5dc;
            border: 1px dashed #536471; border-radius: 4px; padding: 18px;
        }
        QScrollArea { background: #202831; border: 0; }
        QScrollBar:vertical { background: #202a33; width: 12px; margin: 0; }
        QScrollBar::handle:vertical { background: #4a5964; min-height: 24px; border-radius: 5px; }
        QScrollBar::handle:vertical:hover { background: #647783; }
        QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical { height: 0; }
        QScrollBar:horizontal { background: #202a33; height: 12px; margin: 0; }
        QScrollBar::handle:horizontal { background: #4a5964; min-width: 24px; border-radius: 5px; }
        QScrollBar::add-line:horizontal, QScrollBar::sub-line:horizontal { width: 0; }
        QMenu { background: #252f38; color: #e0e7ec; border: 1px solid #4a5964; padding: 4px; }
        QMenu::item { padding: 5px 24px 5px 20px; }
        QMenu::item:selected { background: #3b5362; color: #ffffff; }
        QStatusBar { background: #18212a; color: #b9c6ce; border-top: 1px solid #394651; }
        QStatusBar::item { border: 0; }
        QSplitter::handle { background: #34434e; }
        QSplitter::handle:hover { background: #6d8796; }
        QToolTip { background: #303b44; color: #f2f5f7; border: 1px solid #6a7b86; padding: 4px; }
        """

    def apply_plot_theme(self):
        """Theme the Matplotlib canvas and annotations; the WebGL scene is separate."""
        if not hasattr(self, "plot_canvas"):
            return
        if self.dark_mode:
            figure_bg, axes_bg = "#202831", "#18212a"
            text_color, spine_color, grid_color = "#d7e0e6", "#62727d", "#46545f"
            annotation_bg, annotation_edge = "#303c47", "#71828d"
        else:
            figure_bg, axes_bg = "#f3f5f7", "#ffffff"
            text_color, spine_color, grid_color = "#26323b", "#aab6be", "#d9e0e5"
            annotation_bg, annotation_edge = "#fffbe8", "#c8bd91"

        fig = self.plot_canvas.fig
        ax = self.plot_canvas.ax
        fig.patch.set_facecolor(figure_bg)
        ax.set_facecolor(axes_bg)
        ax.tick_params(axis="both", colors=text_color, labelcolor=text_color)
        ax.xaxis.label.set_color(text_color)
        ax.yaxis.label.set_color(text_color)
        ax.title.set_color(text_color)
        for spine in ax.spines.values():
            spine.set_color(spine_color)
        ax.grid(True, color=grid_color, linestyle=":", alpha=0.65)
        for item in ax.texts:
            item.set_color(text_color)
        annotation = getattr(self.plot_canvas, "cursor_annotation", None)
        if annotation is not None:
            annotation.set_color(text_color)
            patch = annotation.get_bbox_patch()
            if patch is not None:
                patch.set_facecolor(annotation_bg)
                patch.set_edgecolor(annotation_edge)
                patch.set_alpha(0.95)
        self.plot_canvas.draw_idle()

    def apply_theme(self):
        """Apply the selected theme to all Qt UI layers, not the 3D WebGL page."""
        stylesheet = self.dark_theme() if self.dark_mode else self.light_theme()
        self.setStyleSheet(stylesheet)

        palette = QPalette()
        if self.dark_mode:
            colors = {
                QPalette.Window: "#202831", QPalette.WindowText: "#e0e7ec",
                QPalette.Base: "#18212a", QPalette.AlternateBase: "#202b35",
                QPalette.ToolTipBase: "#303b44", QPalette.ToolTipText: "#f2f5f7",
                QPalette.Text: "#dfe7ec", QPalette.Button: "#303c47",
                QPalette.ButtonText: "#e0e7ec", QPalette.BrightText: "#ffffff",
                QPalette.Highlight: "#36576b", QPalette.HighlightedText: "#ffffff",
                QPalette.Link: "#8dbbd1", QPalette.Light: "#53616b",
                QPalette.Mid: "#43515c", QPalette.Dark: "#151d25",
                QPalette.Shadow: "#10161c"
            }
        else:
            colors = {
                QPalette.Window: "#f3f5f7", QPalette.WindowText: "#26323b",
                QPalette.Base: "#ffffff", QPalette.AlternateBase: "#f2f5f7",
                QPalette.ToolTipBase: "#fffbe8", QPalette.ToolTipText: "#27333b",
                QPalette.Text: "#26323b", QPalette.Button: "#ffffff",
                QPalette.ButtonText: "#26323b", QPalette.BrightText: "#111820",
                QPalette.Highlight: "#c9dfed", QPalette.HighlightedText: "#1e2b34",
                QPalette.Link: "#326d8b", QPalette.Light: "#ffffff",
                QPalette.Mid: "#cbd4da", QPalette.Dark: "#d7dfe4",
                QPalette.Shadow: "#aeb8bf"
            }
        for role, color in colors.items():
            palette.setColor(role, QColor(color))
        app = QApplication.instance()
        if app is not None:
            app.setPalette(palette)
        self.setPalette(palette)
        self.apply_requirement_status_theme()
        self.apply_anomaly_row_theme()
        self.apply_plot_theme()

    def apply_requirement_status_theme(self):
        """Keep PASS/FAIL text legible after every light/dark theme switch."""
        if not hasattr(self, "req_label"):
            return
        text = self.req_label.text().upper()
        if "PASSED" in text:
            color = "#79d69a" if self.dark_mode else "#16803d"
            self.req_label.setStyleSheet(f"color: {color}; font-size: 14px;")
        elif "FAILED" in text:
            color = "#ff8585" if self.dark_mode else "#c62828"
            self.req_label.setStyleSheet(f"color: {color}; font-size: 14px;")
        else:
            self.req_label.setStyleSheet("")

    def apply_anomaly_row_theme(self):
        """Recolor existing anomaly rows when the application theme changes."""
        if not hasattr(self, "table"):
            return
        if self.dark_mode:
            anomaly_bg = QColor("#5a451b")
            anomaly_fg = QColor("#fff0c2")
        else:
            anomaly_bg = QColor("#fff2b3")
            anomaly_fg = QColor("#5c4211")
        for row in range(self.table.rowCount()):
            flags = self.anomaly_flags[row] if row < len(self.anomaly_flags) else {}
            is_anomaly = any(flags.values())
            for col in range(self.table.columnCount()):
                cell = self.table.item(row, col)
                if cell is None:
                    continue
                if is_anomaly:
                    cell.setBackground(anomaly_bg)
                    cell.setForeground(anomaly_fg)
                else:
                    # Clear any prior explicit brushes so the current palette/QSS wins.
                    cell.setBackground(QBrush())
                    cell.setForeground(QBrush())

    def toggle_theme(self):
        self.dark_mode = not self.dark_mode
        self.apply_theme()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = CanAnalyzerGUI()
    window.show()
    sys.exit(app.exec_())