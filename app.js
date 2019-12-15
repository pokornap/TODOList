const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;







const server = http.createServer(function (request, response) {

  var filePath = '.' + request.url;
  if (filePath == './')
    filePath = './index.html';

  var extName = path.extname(filePath);
  var contentType = 'text/html';
  switch (extName) {
      case '.js':
          contentType = 'text/javascript';
          break;
      case '.css':
          contentType = 'text/css';
          break;
  }

  fs.exists(filePath, function(exists) {

    if (exists) {
        fs.readFile(filePath, function(error, content) {
            if (error) {
                response.writeHead(500);
                response.end();
            }
            else {
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            }
        });
    }
    else {
        response.writeHead(404);
        response.end();
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});