const http = require('http');

http.createServer((request, response) => {
    // Send the HTTP header
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body
    response.end('Hello World\n');
}).listen(3000);

console.log('Server is running at http://127.0.0.1:3000/');