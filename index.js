const http = require('http');
const routes = require('./routes.js');
const { parseQuery, parseBody } = require('./utils.js');

async function middleware(request, response){
    parseQuery(request, response);
    await parseBody(request, response);
};

http.createServer(async (request, response) => {
    const path = request.url.split('?')[0];
    const handler = routes[path] ? routes[path][request.method] : null;

    if(handler){
        await middleware(request, response);
	    handler(request, response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        return response.end('404 Not Found\n');
    }
}).listen(3000);

console.log('Server is running at http://127.0.0.1:3000/');