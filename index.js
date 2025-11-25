const http = require('http');

http.createServer((request, response) => {
    console.log('Request received');
}).listen(3000);

console.log('Server is running at http://127.0.0.1:3000/');