// jshint esversion:6

// *********************************************************************
// KEY POINTERS for this exercise - teaching points or take aways 

// Key lesson take away 
// implement a get request 
// read data 
// sending back 
// response to serve data and there are methods attached to use on the response 
// *********************************************************************



const http = require('http');
const fs = require('fs');
var port = 8080;

function sayHello(req, res) {
  console.log(req);
  // header
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.end(); 
}
// server start 

var server = http.createServer(sayHello);
server.listen(port);

console.log('hello' + ':' + port);
















// ===== W3 examples 



//w3 example\

// console.log('checking server');

// console.log("We've got a request for " + req.url);

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);