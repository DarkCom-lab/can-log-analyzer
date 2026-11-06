# CAN Log Analyzer Pro

Desktop application for inspecting CAN traces, plotting signals, checking requirements, and exporting analysis results.

## Project evolution

This repository records the project as it evolved:

1. Initial CAN log analysis application.
2. Embedded 3D vehicle visualization synchronized with CAN playback.

## Run the analyzer

```powershell
python can_analyzer_gui_binary_enhanced.py
```

The base application requires Python, PyQt5, Matplotlib, and NumPy. The 3D-enabled version additionally uses PyQtWebEngine.

See `README_3D_INTEGRATION.md` for the 3D viewer build and packaging instructions.
