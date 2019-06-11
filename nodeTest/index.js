let event = require('events').EventEmitter;
let e = new event();

e.on("name",() => {
  console.log('nameEvent')
});

setTimeout(() => {
  e.emit('name');
},1000)
