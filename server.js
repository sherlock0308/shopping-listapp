const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE = __dirname;

http.createServer((req, res) => {
  const file = path.join(BASE, req.url === '/' ? 'shopping-list.html' : req.url);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(8787, () => console.log('Server at http://localhost:8787'));
