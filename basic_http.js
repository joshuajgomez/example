var http = require('http');

http.createServer(function(req, res) {
	console.log('Message received : ' + req.body);
	res.end('Hello');
}).listen(3000);

console.log('Listening to port 3000');