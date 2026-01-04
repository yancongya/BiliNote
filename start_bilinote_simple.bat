@echo off
set PROJECT_DIR=%~dp0

echo Starting BiliNote Application...

start "BiliNote Backend" cmd /k "cd /d %PROJECT_DIR%backend && python main.py"

timeout /t 5 /nobreak >nul

start "BiliNote Frontend" cmd /k "cd /d %PROJECT_DIR%BillNote_frontend && pnpm dev"

echo Started both services.
pause