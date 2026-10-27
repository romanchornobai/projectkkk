# Servidor GET con PowerShell y Node.js

Servidor HTTP nativo (sin dependencias externas) creado en [server.js](file:///c:/Users/Roman/Desktop/page%20kk/server.js).

### Cómo ejecutarlo
```powershell
node server.js
```

### Probarlo
Al hacer cualquier petición `GET` a `http://localhost:3000`:
```powershell
curl http://localhost:3000
```

Devuelve:
```json
{
  "id": 1,
  "command": "Get-Process | Select-Object -First 5"
}
```
