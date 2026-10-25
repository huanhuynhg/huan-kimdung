@echo off
cd /d "%~dp0"
echo ============================================
echo Wedding Invitation - LOCAL MEMORIES PREVIEW
echo ============================================
echo.
where py >nul 2>&1
if %errorlevel%==0 (
  py scripts\build_memories_manifest.py
) else (
  python scripts\build_memories_manifest.py
)
if errorlevel 1 (
  echo Failed to scan Memories photos. Check Python installation.
  pause
  exit /b 1
)
echo.
echo Starting local server at http://localhost:5500
 echo Add photos to assets\memories\photos then restart this script to rescan.
echo Press Ctrl+C in this window to stop.
start "" "http://localhost:5500"
where py >nul 2>&1
if %errorlevel%==0 (
  py -m http.server 5500
) else (
  python -m http.server 5500
)
pause
