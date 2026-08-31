@echo off
setlocal
cd /d "%~dp0"

set PORT=5930

echo.
echo   ============================================
echo     Muhammad Ibrahim - portfolio
echo   ============================================
echo.
echo     On this PC     http://localhost:%PORT%
echo     On your phone  http://%COMPUTERNAME%:%PORT%
echo                    (same wifi; or use your PC's 192.168.x.x address)
echo.
echo     Close this window to stop the server.
echo     After editing a file, hard refresh with Ctrl+Shift+R.
echo.

REM Open the browser a moment after the server has had time to bind.
start "" cmd /c "timeout /t 2 /nobreak >nul & start "" http://localhost:%PORT%/"

REM python -m http.server binds 0.0.0.0, so the phone URL above works too.
python -m http.server %PORT%

REM If we get here the server exited. Most common cause is the port already
REM being in use by another copy of this script.
echo.
echo   Server stopped. If it exited immediately, port %PORT% is already in use.
echo   Find it with:  netstat -ano ^| findstr :%PORT%
echo.
pause
