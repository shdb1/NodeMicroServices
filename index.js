const { send } = require('micro')
const url = require('url')
const visits={}

module.exports = function (request, response) {
    // Your microservice here
    const { pathname } = url.parse(request.url)
   console.log(pathname)
    console.log('micro service works!!!')
    if(visits[pathname]){
      visits[pathname]=visits[pathname]+1;
    }
    else{
      visits[pathname]=1;
    }
    send(response, 200, '${visits[pathname]}');

  }