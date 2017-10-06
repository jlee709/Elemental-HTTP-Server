 // jshint esversion:6     
const fs = require('fs');
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

    case 'css/styles.css':
    //loading css styles
      break;

    default: 
      console.log('404 error');    
  }
}

function readUrl(url, res){
  //./public/index.html
  fs.readFile(`./public/${url}`, function(err, data){
    console.log(url);
    res.writeHead(200, { 
      'Content-Type': 'text/html',  
      'Content-Length': data.toString().length
    });
    res.write(data);
    res.end();
  });
}










module.exports = {
  getRequest: getRequest

};