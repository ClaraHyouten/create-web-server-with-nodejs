const routes = {
    '/hello': {
        GET: function(request, response){
            const name = request.query.name || 'World'; 
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Hello ' + name);
        }
	},
    '/goodbye': {
        GET: function(request, response){
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Goodbye World\n');
        }
    },
    '/data': {
        POST: function(request, response){
            const body = request.body;
            body.success = true;
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(request.body, null, 2));
        }
    },
};

module.exports = routes;