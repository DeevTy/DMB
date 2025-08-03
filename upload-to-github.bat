@echo off
echo ========================================
echo Subiendo DMB Website a GitHub
echo ========================================

echo.
echo Configurando Git...
git config user.name "DeevTy"
git config user.email "deevty@github.com"

echo.
echo Verificando estado del repositorio...
git status

echo.
echo Agregando archivos...
git add .

echo.
echo Haciendo commit...
git commit -m "Initial commit: Página web profesional de DMB con diseño monocromático, animaciones 3D y sistema de temas"

echo.
echo Subiendo a GitHub...
git push -u origin master

echo.
echo ========================================
echo ¡Proceso completado!
echo ========================================
echo.
echo Si hay errores de autenticación, necesitarás:
echo 1. Ir a GitHub.com -> Settings -> Developer settings -> Personal access tokens
echo 2. Generar un nuevo token con permisos de 'repo'
echo 3. Usar ese token como contraseña cuando Git lo solicite
echo.
pause 