// require (import http module)
const http = require('http');
http
	.createServer(function(request, response) {
		console.log(request.url, request.headers, request.body);
		response.end('hello world !');
	})
	.listen(3000);

// const path = require('path');

// console.log(__dirname);
