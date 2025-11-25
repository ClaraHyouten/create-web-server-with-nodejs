function parseQuery(request, response){
	// Query
    const queryString = request.url.split('?')[1];
    let query = {};

    if(queryString) {
	    query = queryString
	    .split('&')
	    .reduce((obj, param) => { 
			    const p = param.split('=');
			    const key = p[0];
			    const val = p[1]
			    obj[key] = val; 
			    return obj;
			}, {});
	    }
    request.query = query;
};

function parseBody(request, response){
    return new Promise((resolve, reject) => {
        // Body
        let bodyStr = '';
        request.on('data', function(chunk) {
            bodyStr += chunk;
        });
        request.on('end', function() {
            if(request.headers['content-type'] === 'application/json'){
                try {
                    request.body = JSON.parse(bodyStr);
                } catch(e){
                    reject(e);
                }
            }
            resolve();
        });
    });
};

module.exports = { parseQuery, parseBody };