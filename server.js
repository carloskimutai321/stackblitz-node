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
      break;
	case '/about':
		path += 'about';
		break;
	  default:
		path += '404.html'
		break;
  }

  // send html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);
  });

  // routing
});

// localhost is the default value for 2nd argument
server.listen(5600, 'localhost', () => {
  console.log('listening for requests on port 3000');
});

