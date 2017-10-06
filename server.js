// jshint esversion:6

// *********************************************************************
// KEY POINTERS for this exercise - teaching points or take aways 

// Key lesson take away 
// implement a get request 
// read data 
// sending back 
// response to serve data and there are methods attached to use on the response 

// *********************************************************************


//asynch and nde taking data asynchronously 
//code needds to exectue where the code is asvailable to you 
// parsing the body after the callb on event understanding at the right pont to acsess data

//dependent var 
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const port = 8080;
const host = '0.0.0.0';
const handlers = require('./handlers');


http.createServer(justinsServer).listen(port);


function justinsServer(req, res) {
  // console.log(req);

//needs swtich for all GET PUT POST DELETE 
  switch(req.method){
    case "GET":
      handlers.getRequest(req, res);
      break;
    
    case "POST":
      handelers.postRequest(req, res);
      break;
    
    default:
      console.log('404 server error jesus christ monkey balls ');
  } 

  //parse querystrings
  pathName = querystring.parse(req.url);
  console.log(pathName, "PATH NAME FROM Q_STRING");


}
// fs.stat(path, callback);  asks for files directories etc
// watch out for double posting or double puts. updates for those 
