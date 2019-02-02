const fs = require('fs');
const join = require("path").join;
function deleteFile(dirPath){
  let arr = fs.readdirSync(dirPath);
  arr.forEach((el) => {
    let filePath = join(dirPath,el);
    let stats = fs.statSync(filePath);
    if(stats.isFile()){
      fs.unlinkSync(filePath);
    }else{
      deleteFile(filePath);
    }
  });
  fs.rmdirSync(dirPath);
}

deleteFile(join(__dirname,"../test/"));
