var http = require('http');

var port = 3000;

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log('Server running at 3000');
});
