 // jshint esversion:6     
const fs = require('fs');
const path = require('path');
// const http = require('http');

function getRequest(req, res){
 var url = req.url;
  // gets fthe file contents 
  switch(url){
    case '/':
      // load index.html
      console.log('getting index');
      readUrl('index.html',res);
      break;
    
    case '/index.html':
      //load index.html
      console.log('getting index');
      readUrl('index.html', res);
      break;

    case '/helium.html':
    //load helium.html
      let fileName = url.replace('/','');

      console.log('getting helium');
      readUrl(fileName, res);
      break;  

    case '/hydrogen.html':
    //load hydrogen.html
      console.log('getting hydrogen');
      let hydrogenFileName = url.replace('/','');
      readUrl(hydrogenFileName, res);
      break;

    case '/css/styles.css':   // <----- check later
    //loading css styles
      let cssFile = url.replace('/', '');
      readUrl(cssFile, res, 'text/css');
      break;

    default: 
      console.log('404 error, time for beer');
      readUrl('404.html', res);   
  }
}


function postRequest(req, res, cb){
  var url = req.url;
  switch(url) {
    case '':
    break;
  }
}



// this function reads the uri in the Url string
function readUrl(url, res, type){

  type = type || 'text/html';
  
  fs.readFile(path.join('public', url), function(err, data){
    res.writeHead(200, { 
      'Content-Type': type,  
      'Content-Length': data.toString().length
    });
    res.write(data);
    res.end();
  });
}

// before refactor 
// function readCss(url, res){
  
//   fs.readFile(path.join('public', url), function(err, data){
//     res.writeHead(200, { 
//       'Content-Type': 'text/css',
//       'Content-Length': data.toString().length
//     });
//     res.write(data);
//     res.end();
//   });
// }

// elm data comes from the qs.parse
function genElmPage(elmData){
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Elements - ${elmData.elementName}</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>${elmData.elementName}</h1>
  <h2>${elmData.elementSymbol}</h2>
  <h3>Atomic number ${elmData.elementAtomicNumber}</h3>
  <p>${elmData.elementDescription}</p>
  <p><a href="/">back</a></p>
</body>
</html>`;
}




module.exports = {
  getRequest: getRequest,
  postRequest:postRequest
};