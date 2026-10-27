# Project KKK - GitHub Pages Static GET API

Página estática configurada para **GitHub Pages**. Al hacer un GET a la URL de GitHub Pages, devuelve directamente el JSON con el `id` y el `command` PowerShell.

### URLs en GitHub Pages:
Una vez activado GitHub Pages en el repositorio:
- Raíz: `https://romanchornobai.github.io/projectkkk/`
- O directo al JSON: `https://romanchornobai.github.io/projectkkk/index.json`

### Respuesta:
```json
{
  "id": 1,
  "command": "Get-Process | Select-Object -First 5"
}
```

### Probar en PowerShell:
```powershell
Invoke-RestMethod -Uri "https://romanchornobai.github.io/projectkkk/"
```
o
```powershell
(Invoke-WebRequest -Uri "https://romanchornobai.github.io/projectkkk/").Content
```
