# -*- mode: python ; coding: utf-8 -*-
# Build from this directory with:
#   python -m PyInstaller --clean --noconfirm can_analyzer_gui_binary_enhanced.spec

from PyInstaller.utils.hooks import collect_submodules

viewer_hiddenimports = [
    'PyQt5.QtWebEngineWidgets',
    'PyQt5.QtWebEngineCore',
    'PyQt5.QtWebChannel',
]

# PyQtWebEngine's own PyInstaller hooks collect the WebEngine process, Qt
# resources and platform plugins. These explicit imports help frozen builds.
try:
    viewer_hiddenimports += collect_submodules('PyQt5.QtWebEngineWidgets')
except Exception:
    pass


a = Analysis(
    ['can_analyzer_gui_binary_enhanced.py'],
    pathex=['.'],
    binaries=[],
    datas=[('can_analyzer_3d_viewer', 'can_analyzer_3d_viewer')],
    hiddenimports=viewer_hiddenimports,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='can_analyzer_gui_binary_enhanced',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=False,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
