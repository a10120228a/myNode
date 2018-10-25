class Node{
  constructor(data){
    this.root = this;
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree{
  constructor(){
    this.root = null;
  }
  insert(data){
    let child = new Node(data);
    const insertNode = (node,newNode) => {
      if(newNode.data < node.data){
        if(!node.left){
          node.left = newNode;
        }else{
          insertNode(node.left,newNode);
        }
      }else{
        if(!node.right){
          node.right = newNode;
        }else{
          insertNode(node.right,newNode);
        }
      }
    };
    if(!this.root){
      this.root = child;
    }else{
      insertNode(this.root,child);
    }
  }
  inOrder(){
    let arr = [];
    const inorderMethod = (node,callback) => {
      if(node){
        inorderMethod(node.left,callback);
        arr.push(callback(node.data));
        inorderMethod(node.right,callback);
      }
    };
    inorderMethod(this.root,callbac);
    function callbac(c){
      return c
    }
    return arr;
  }
  getOrder(){
    let arr = [];
    const getOr = (node,cb) => {
      if(node){
        arr.push(cb(node.data));
        getOr(node.left,cb);
        getOr(node.right,cb);
      }
    };
    getOr(this.root,aa);
    function aa(a){
      return a
    }
    return arr;
  }
  postOrder(){
    let arr = [];
    const getOr = (node,cb) => {
      if(node){
        getOr(node.left,cb);
        getOr(node.right,cb);
        arr.push(cb(node.data));
      }
    };
    getOr(this.root,aa);
    function aa(a){
      return a
    }
    return arr;
  }
}

let tree = new Tree();
tree.insert(8);
tree.insert(1);
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(4);
tree.insert(2);
tree.insert(9);
tree.insert(10);
console.log(tree.postOrder());
