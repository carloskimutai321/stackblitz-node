const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// console.log(req);
	console.log(req.url);

	// set header content type
	res.setHeader('Content-Type', 'text/html');

	let path = './views/';

	switch (req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
		case '/about':
			path += 'about-us.html';
			res.statusCode = 200;
			break;
		case '/about-me':
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			res.end();
			break;
		default:
			path += '404.html';
			res.statusCode = 400;
			break;
	}

	// send html file
	fs.readFile(path, (err, data) => {
		if (err) {
			// console.log(err);

			res.end();
		} else
			// {res.end(data)};
			res.write(data)
		res.end();
	});

	// routing
});

// localhost is the default value for 2nd argument
server.listen(5500, /*'localhost'*/() => {
	console.log('listening for requests on port 3000');
});

