# CAN Log Analyzer Pro

CAN Log Analyzer Pro is a desktop engineering tool for exploring Controller Area Network (CAN) log data and understanding how vehicle signals change over time.

The project started as a focused CAN log analysis application and was later extended with an interactive 3D vehicle scene. The 3D view is linked to the CAN playback timeline, so decoded signals can be observed both as charts and as visible vehicle motion.

## What the application does

- Loads and inspects CAN trace data.
- Decodes messages and signals using CAN database definitions.
- Plots signal values over time with Matplotlib.
- Supports signal exploration during playback.
- Helps compare signal behavior against engineering requirements.
- Exports analysis results for reporting and review.
- Displays a synchronized 3D vehicle visualization in the enhanced version.

## Why the 3D integration is useful

Traditional CAN analysis shows the data numerically or as plots. The 3D integration adds a visual interpretation layer:

1. A CAN log is loaded into the analyzer.
2. The user selects a signal or starts playback.
3. The analyzer updates the current playback time.
4. The 3D viewer receives the corresponding vehicle state.
5. The vehicle model responds to the decoded data through animation or scene updates.

This makes it easier to connect an abstract CAN value with an observable vehicle behavior. It is especially useful for demonstrations, debugging, requirement validation, and presentations.

## Project structure

- `can_analyzer_gui_binary_enhanced.py` — main desktop application.
- `can_analyzer_gui_binary_enhanced.spec` — packaging specification.
- `can_analyzer_3d_viewer/` — embedded Three.js viewer source and browser bundle.
- `meshes/realistic-sedan-animated.glb` — sample animated vehicle model.
- `prepare_threejs_viewer.ps1` — reproducible viewer preparation script.
- `car_can.xml` and `key_can.xml` — CAN database/configuration resources.
- `README_3D_INTEGRATION.md` — detailed 3D build and packaging notes.

## Requirements

The base analyzer requires:

- Python 3
- PyQt5
- Matplotlib
- NumPy

The 3D-enabled version additionally requires:

- PyQtWebEngine
- Node.js and npm when rebuilding the viewer bundle

Install the Python dependencies with:

```powershell
python -m pip install PyQt5 PyQtWebEngine matplotlib numpy
```

## Running the application

From the project directory:

```powershell
python can_analyzer_gui_binary_enhanced.py
```

The application can be launched without rebuilding the viewer when the committed browser bundle is already available.

## Rebuilding the 3D viewer

The viewer source is located in `can_analyzer_3d_viewer/`. To prepare or rebuild the Three.js bundle, review and run:

```powershell
.\prepare_threejs_viewer.ps1
```

The script is intended to make the viewer preparation process reproducible across development environments. Additional integration and packaging details are available in [README_3D_INTEGRATION.md](README_3D_INTEGRATION.md).

## Development story

The repository intentionally records the project as a progression:

1. Initial CAN log analyzer application.
2. Project documentation and scope definition.
3. Embedded Three.js viewer source.
4. Reproducible viewer build tooling.
5. Animated vehicle model integration.
6. Synchronization between CAN playback and the 3D scene.
7. Documentation and packaging of the complete integration.

This history reflects the way the project was developed: first as a practical CAN analysis tool, then as an enhanced visualization platform.

## Possible extensions

Future improvements could include:

- Additional CAN database formats.
- More vehicle signals mapped to 3D components.
- Live CAN hardware input.
- Recording and replay controls.
- Automated requirement-verification reports.
- More vehicle models and configurable animation mappings.
- A dedicated configuration file for signal-to-animation bindings.

## License

No license has been added yet. Add an appropriate license before distributing the project publicly.
