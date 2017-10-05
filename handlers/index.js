module.exports = {
  getRequest: getRequest
};

function getRequest(req, res){
  // gets fthe file contents 
  switch(req.url){
    case '/':
      // load index.html
      console.log('getting index');
      break;

    case '/index.html':
      //load index.html
      console.log('getting index');
      break;
    case '/helium.html':
    //load helium.html
    console.log('getting helium');
      break;  
    case '/hydrogen.html':
    //load hydrogen.html
    console.log('getting hydrogen');
      break;

    default:     
  }
  
  res.write('hello im hungry');
  res.end();
}