'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  const body = JSON.stringify({
    ping: 'pong',
    server_date: new Date()
  });

  console.log([
    (new Date()).toISOString(),
    (
	  req.ip ||
      req._remoteAddress ||
      (req.connection && req.connection.remoteAddress) ||
      undefined
    ),
    req.method,
    req.originalUrl || req.url,
  ].join(' '));

  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.writeHead(200);
  res.end(body);
});

server.listen(8000);
