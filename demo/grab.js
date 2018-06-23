process.on('message',(data)=>{
  console.log(data);
  process.send('end');
  process.kill(process.pid);
});