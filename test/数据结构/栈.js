function Stack(){
  this.data = [];
}
Stack.prototype = {
  push:function(item){
    this.data.push(item);
  },
  pop:function(){
    return this.data.pop();
  },
  size:function(){
    return this.data.length;
  },
  toString:function(){
    return this.data.join();
  },
};

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack.toString());
console.log(stack.pop());
stack.push(7);
console.log(stack.toString());
