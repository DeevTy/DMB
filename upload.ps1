Write-Host "========================================" -ForegroundColor Green
Write-Host "Subiendo DMB Website a GitHub" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "Configurando Git..." -ForegroundColor Yellow
git config user.name "DeevTy"
git config user.email "deevty@github.com"

Write-Host ""
Write-Host "Verificando estado del repositorio..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "Agregando archivos..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Haciendo commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Página web profesional de DMB con diseño monocromático, animaciones 3D y sistema de temas"

Write-Host ""
Write-Host "Subiendo a GitHub..." -ForegroundColor Yellow
git push -u origin master

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "¡Proceso completado!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Si hay errores de autenticación, necesitarás:" -ForegroundColor Red
Write-Host "1. Ir a GitHub.com -> Settings -> Developer settings -> Personal access tokens" -ForegroundColor Red
Write-Host "2. Generar un nuevo token con permisos de 'repo'" -ForegroundColor Red
Write-Host "3. Usar ese token como contraseña cuando Git lo solicite" -ForegroundColor Red
Write-Host ""
Read-Host "Presiona Enter para continuar" 