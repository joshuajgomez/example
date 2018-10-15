var http = require('http');

http.createServer(function(req, res) {
	res.end('Hello');
}).listen(3000);

console.log('Listening to port 3000');