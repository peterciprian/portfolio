$ErrorActionPreference = "Stop"

$appRoot = Split-Path -Parent $PSScriptRoot
$docsPath = Resolve-Path (Join-Path $appRoot "..\docs") -ErrorAction SilentlyContinue

if (-not $docsPath) {
  $docsPath = New-Item -ItemType Directory -Path (Join-Path $appRoot "..\docs")
}

Push-Location $appRoot
try {
  $env:GITHUB_PAGES = "true"
  $env:NEXT_PUBLIC_BASE_PATH = "/portfolio"

  npm run build

  Get-ChildItem $docsPath -Force | Remove-Item -Recurse -Force
  Copy-Item -Path ".\out\*" -Destination $docsPath -Recurse -Force
  New-Item -ItemType File -Path (Join-Path $docsPath ".nojekyll") -Force | Out-Null
}
finally {
  Pop-Location
}