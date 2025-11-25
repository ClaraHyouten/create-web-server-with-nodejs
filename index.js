const http = require('http');

const routes = {
    '/hello': function(request, response){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World\n');
    },
    '/goodbye': function(request, response){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Goodbye World\n');
    }
};

http.createServer((request, response) => {
    const handler = routes[request.url];
    if (handler) {
        return handler(request, response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        return response.end('404 Not Found\n');
    }
}).listen(3000);

console.log('Server is running at http://127.0.0.1:3000/');