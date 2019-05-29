const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
  fs.readFile("../assert/liang.png",(err,data) => {
    if(err){
      throw err;
    }
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(data);
    res.end();

  });

}).listen(8000,() => {
  console.log('run at localhost:8000')
});
