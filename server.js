const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Configuración de cabeceras para permitir CORS y responder JSON
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET') {
    const data = {
      id: 1,
      command: 'Get-Process | Select-Object -First 5'
    };

    res.writeHead(200);
    res.end(JSON.stringify(data, null, 2));
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
