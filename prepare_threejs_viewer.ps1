$ErrorActionPreference = 'Stop'
$Viewer = Join-Path $PSScriptRoot 'can_analyzer_3d_viewer'

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    throw 'Node.js (which includes npm) is required to prepare the embedded Three.js viewer.'
}

Write-Host 'Installing the pinned local Three.js and esbuild packages...'
npm install --prefix $Viewer
if ($LASTEXITCODE -ne 0) { throw 'npm install failed.' }

Write-Host 'Bundling Three.js and the viewer into a single local JavaScript file...'
npm run --prefix $Viewer build
if ($LASTEXITCODE -ne 0) { throw 'Three.js viewer bundle failed.' }

$Bundle = Join-Path $Viewer 'viewer.bundle.js'
if (-not (Test-Path $Bundle)) { throw 'viewer.bundle.js was not generated.' }
Write-Host 'Viewer bundle ready. The desktop application can now run the 3D view without CDN access.'
