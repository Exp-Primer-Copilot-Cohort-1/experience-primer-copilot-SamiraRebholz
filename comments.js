// Create web server 
// Create a web server that listens on port 3000 and serves up the following response:

// When you visit http://localhost:3000/comments, it should display the following HTML:
// <h1>Comments</h1>
// <p>Comments are not available.</p>

// When you visit http://localhost:3000/missing, it should display the following HTML:
// <h1>Not Found</h1>
// <p>The page you are looking for is not found.</p>

// When you visit any other page, it should display the following HTML:
// <h1>Not Found</h1>
// <p>The page you are looking for is not found.</p>

// Here's some boilerplate code to get you started:

// var http = require('http');
// var server = http.createServer(function(req, res) {
//   // your code here
// });
// server.listen(3000);

var http = require('http');
var server = http.createServer(function(req, res) {
  if (req.url === '/comments') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Comments</h1><p>Comments are not available.</p>');
  } else if (req.url === '/missing') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Not Found</h1><p>The page you are looking for is not found.</p>');
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Not Found</h1><p>The page you are looking for is not found.</p>');
  }
});
server.listen(3000);