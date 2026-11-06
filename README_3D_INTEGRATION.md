# CAN Log Analyzer Pro — Embedded 3D Vehicle Integration

This update is based on the supplied `can_analyzer_gui_binary_enhanced.py` and `.spec` files. It keeps the existing PyQt5 CAN Analysis screen and embeds the 3D vehicle scene directly in the right-hand dashboard, immediately below Requirement status.

## What is included

- Existing CAN Analysis workspace, table, Matplotlib plot, timeline slider, dashboard LEDs, requirement check and exports remain in place.
- Embedded Three.js scene hosted in `QWebEngineView`, below Requirement status in the right panel.
- A **Load GLB Model…** button at the top of the right panel.
- No manual door/trunk command panel: trace playback is the only source of door and trunk animation.
- Orbit/zoom and front, rear, side and three-quarter camera presets.
- CAN playback synchronization. Door/trunk states are accumulated for each trace row, so scrubbing forwards or backwards displays the state at that position.
- The selected GLB is copied to `%LOCALAPPDATA%\CAN Log Analyzer Pro\models\vehicle.glb` and reused on later launches.
- The GLB is selected through **Load GLB Model…**; it does not need to be present in the project directory.

## Project files

- `can_analyzer_gui_binary_enhanced.py` — updated Python application.
- `can_analyzer_gui_binary_enhanced.spec` — updated PyInstaller specification.
- `can_analyzer_3d_viewer/index.html` — embedded viewer interface.
- `can_analyzer_3d_viewer/viewer.js` — Three.js source code.
- `can_analyzer_3d_viewer/package.json` — pinned Three.js/esbuild build dependencies.
- `prepare_threejs_viewer.ps1` — builds the single-file viewer bundle.

## Step 1 — Prepare the Three.js bundle

This integration bundles Three.js locally instead of importing it from a CDN at runtime. That avoids relying on internet access when the final desktop application is running, and avoids browser import-map compatibility problems in older Qt WebEngine/Chromium versions. The Qt 5.15.1 documentation, for example, identifies Chromium 80 as its base version. See [Qt WebEngine overview](https://qthub.com/static/doc/qt5/qtwebengine/qtwebengine-overview.html).

Install Node.js LTS on the build computer. Open PowerShell in this project folder and run:

```powershell
.\prepare_threejs_viewer.ps1
```

The script runs `npm install` using the pinned versions in `can_analyzer_3d_viewer/package.json`, then creates:

```text
can_analyzer_3d_viewer\viewer.bundle.js
```

Internet access is needed once while npm downloads the dependencies. The resulting bundled viewer is local and does not need CDN access at runtime.

## Step 2 — Install PyQtWebEngine

Install it in the same Python/Conda environment that already runs the CAN Analyzer:

```powershell
python -m pip install PyQtWebEngine
```

The existing application also uses PyQt5, Matplotlib and NumPy. Keep the current versions of those dependencies unless your environment requires otherwise.

## Step 3 — Run from source

In the project directory:

```powershell
python can_analyzer_gui_binary_enhanced.py
```

In the **CAN Analysis** screen, use **Load GLB Model…** at the top of the right-hand panel, and choose `realistic-sedan-animated.glb` (the animated sedan file generated earlier). The application copies it into Local AppData so it is remembered at the next launch.

## Step 4 — Rebuild the Windows executable

Install PyInstaller if required:

```powershell
python -m pip install pyinstaller
```

Then, from the directory containing the `.spec` file:

```powershell
python -m PyInstaller --clean --noconfirm can_analyzer_gui_binary_enhanced.spec
```

The executable is created in `dist`. Build only after running `prepare_threejs_viewer.ps1`, because the `.spec` includes the complete viewer folder, including `viewer.bundle.js`.

Qt WebEngine uses a separate `QtWebEngineProcess` executable and bundled Chromium resources. The supplied spec declares the Qt WebEngine imports and relies on PyInstaller's Qt hooks to collect its process/resources. Verify the generated EXE on the target Windows machine before distributing it. Qt's deployment guide explains the additional WebEngine process and resource requirements: [Deploying Qt WebEngine applications](https://qthub.com/static/doc/qt5/qtwebengine/qtwebengine-deploying.html).

## CAN signal mapping

The mapping below is inferred from signal names already referenced in the supplied Python code. It assumes a left-hand-drive vehicle:

| Existing decoded signal | 3D vehicle part |
|---|---|
| `Drd_Status`, `Drd_Status_Cont` | Front-left / driver door |
| `PSD_Status`, `PSD_Status_Cont` | Front-right / passenger door |
| `DRDR_Status`, `DRDR_Status_Cont` | Rear-left / driver-side rear door |
| `Psdr_Status`, `Psdr_Status_Cont` | Rear-right / passenger-side rear door |
| `Bootlid_Status`, `Bootlid_Status_Cont` | Trunk |

Only decoded text that clearly indicates `Open`/`Opened`/`Ajar` or `Closed`/`Close`/`Shut` is interpreted as a door state. Unknown or unrelated values are not guessed. `door_latche_status` is intentionally not assigned to an individual panel because the current Python source uses it as a latch/security status, not a per-door open/closed signal.

**XML validation is still required.** `car_can.xml` and `key_can.xml` were not uploaded with the Python file, so this mapping is an informed assumption based on the signal names visible in the source. If your XML uses different names, side conventions, or enum descriptions (for example numeric values interpreted as `State 1`), adjust `VEHICLE_SIGNAL_TO_PART` and `vehicle_panel_state_from_text()` in the Python file.

## Validation and limitations

- The modified Python source passed `py_compile`.
- The viewer JavaScript source passed `node --check`.
- The CAN state text parser was checked against Open, Opened, Ajar, Closed, Shut, not-open and Unknown examples.
- This environment does not have PyQt5/PyQtWebEngine or a Windows GUI runtime, so I could not launch the actual desktop window or build/test the EXE here.
- The generated GLB needs to be selected once through the application. The GLB is not embedded in this source ZIP because it is already a separate downloaded asset.


## Updated dashboard placement

The application no longer has a separate 3D Vehicle tab or manual door/trunk command buttons. The right-hand CAN Analysis panel is arranged as follows:

1. `Load GLB Model…` button and `Collapse` control at the top.
2. Signal Status group.
3. Requirement status.
4. 3D Vehicle Scene (the embedded Three.js canvas).

Door and trunk animations are driven only by the current CAN trace position. The camera preset buttons are retained inside the 3D viewport for viewing-angle changes; they do not operate vehicle parts.

## UI sizing and theme update

The right-hand dashboard now uses a direct vertical layout instead of placing all content in a scroll area:

1. `Load GLB Model…` and `Collapse` toolbar row.
2. Compact `Signal Status` group.
3. `Requirement` status label.
4. `3D Vehicle Scene`, which has the expanding layout stretch and fills the remaining right-panel height.

The viewer has no separate status-label row beneath it. Viewer load messages are reported through the application status bar, so they do not take height away from the 3D canvas. The `QWebEngineView` has no fixed 300-pixel minimum height; it can resize with the right panel. Collapsing the dashboard hides only the signal summary, while Requirement status and the 3D scene remain visible and the scene expands into the freed space.

The **Toggle Dark/Light** action now applies a complete Qt theme to the desktop UI: main window, toolbar, toolbar buttons, search field, table and headers, selection, group boxes, signal labels, sliders, menus, status bar, splitter, tooltips and dialogs through the application palette. The Matplotlib plot, axes, grid, ticks, hover annotation and navigation toolbar are included. Anomaly rows and PASS/FAIL requirement status are recolored for readability when switching themes.

The embedded Three.js/WebGL page is intentionally excluded from theme changes. Its scene background, loading overlay, camera controls and viewport styling remain as defined in `can_analyzer_3d_viewer/index.html`.

## Validation of this update

- Python source passes `python -m py_compile`.
- Three.js viewer source passes `node --check`.
- Static layout checks confirm that the 3D scene is the only expanding bottom section below Requirement status and no old dashboard scroll container remains.
- This environment does not include PyQt5/PyQtWebEngine, so the actual desktop window still needs a visual check on Windows.
