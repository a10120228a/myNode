const express = require('express');
const app = express();
app.get("/",(req,res) => {
  res.send("哈哈");
  res.end();
});
app.listen(3000,() => {
  console.log('node run at localhost:3000');
});


