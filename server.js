// jshint esversion:6

// *********************************************************************
// KEY POINTERS for this exercise - teaching points or take aways 

// Key lesson take away 
// implement a get request 
// read data 
// sending back 
// response to serve data and there are methods attached to use on the response 

// *********************************************************************


//dependent var 
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const port = 8080;


function justinsServer(req, res) {
  // console.log(req);

//needs swtich for all GET PUT POST DELETE 


  switch(req.url){
    case "/index.html":
      console.log('this is the index');
      break;

    case "/helium.html":
      console.log('helium page');
      break;

    case "/hydrogen.html":
      console.log('the hydrogen page');
      break; 

    default:
      console.log('404 server error jesus christ monkey balls ');
  } 

  // header
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('ilikebeer');
  res.end(); 
}



// server start 
var server = http.createServer(sayHello);
server.listen(port);//port is 8080

console.log('hello you are plugged into' + ':' + port);






// watch out for double posting or double puts. updates for those 


// ===== W3 examples 



//w3 example\

// console.log('checking server');

// console.log("We've got a request for " + req.url);

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);