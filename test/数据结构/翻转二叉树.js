
  function reverseTree(data){
    data = data.root;
    if(!data.root || (!data.right && !data.left)){
      return data;
    }
    if(data.left && !data.right){
      data.right = data.left;
      data.left = null;
      reverseTree(data.right);
    }
    if(data.right && !data.left){
      data.left = data.right;
      data.right = null;
      reverseTree(data.left);
    }
    if(data.right && data.left){
      let middle = data.left;
      data.left = data.right;
      data.right = middle;
      reverseTree(data.left);
      reverseTree(data.right);
    }
    return data;
  }


  //定义节点
  class Node {
    constructor(data){
      this.root = this;
      this.data = data;
      this.left = null;
      this.right = null
    }
  }
  //创建二叉搜索树(BST)）
  class BinarySearchTree {
    constructor(){
      this.root = null
    }
    //插入节点
    insert(data){
      const newNode = new Node(data);
      const insertNode = (node,newNode) => {
        if (newNode.data < node.data){
          if(node.left === null){
            node.left = newNode
          }else {
            insertNode(node.left,newNode)
          }
        }else {
          if(node.right === null){
            node.right = newNode
          }else{
            insertNode(node.right,newNode)
          }

        }
      };
      if(!this.root){
        this.root = newNode
      }else {
        insertNode(this.root,newNode)
      }
    }
  }
  //创建BST
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(11);
  tree.insert(2);
  tree.insert(32);
  tree.insert(54);
  tree.insert(25);
  tree.insert(86);
  tree.insert(17);
  tree.insert(58);
  tree.insert(49);
  console.log(tree);
  console.log(reverseTree(tree));
