function Queue(){
  this.data = [];
}

Queue.prototype = {
  add:function(item){
    this.data.push(item);
  },
  remove:function(){
    return this.data.shift();
  },
  size:function(){
    return this.data.length;
  },
  toString:function(){
    return this.data.join();
  }
};

let queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);

console.log(queue.remove());
console.log(queue.toString());
