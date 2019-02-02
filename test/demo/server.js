let child = require('child_process').spawn("ls",['-a']);

// child.on("message",(msg) => {
//   console.log(`${msg}`);
//   if(msg === 'end'){
//     process.exit(0);
//   }
// });
//
// child.send(1000);
