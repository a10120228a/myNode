function Node(data){
  this.root = this;
  this.child = data;
  this.left = null;
  this.right = null;
}

function Tree(){
  this.root = null;
}

Tree.prototype = {
  insert:function(item){
    item = new Node(item);
    if(!this.root){
      this.root = item;
    }else{
      insertNode(this.root,item);
    }

    function insertNode(node,newNode){
      if(node.child > newNode.child){
        if(node.left === null){
          node.left = newNode;
        }else{
          insertNode(node.left,newNode);
        }
      }else{
        if(node.right === null){
          node.right = newNode;
        }else{
          insertNode(node.right,newNode);
        }
      }
    }
  },
  qianxuBianli:function(){
    let result = [];
    function order(node,cb){
      if(node !== null){
        result.push(cb(node.child));
        order(node.left,cb);
        order(node.right,cb);
      }
    }
    function callback(data){
      return data;
    }
    order(this.root,callback);
    return result;
  },
  zhongxuBianli:function(){
    let result = [];
    function order(node,cb){
      if(node !== null){
        order(node.left,cb);
        result.push(cb(node.child));
        order(node.right,cb);
      }
    }
    function callback(data){
      return data
    }
    order(this.root,callback);
    return result;
  },
  houxuBianli:function(){
    let result = [];
    function order(node,cb){
      if(node !== null){
        order(node.left,cb);
        order(node.right,cb);
        result.push(cb(node.child));
      }
    }
    function callback(data){
      return data
    }
    order(this.root,callback);
    return result;
  },
  getMin:function(node){
    function min(node){
      return node ? node.left ? min(node.left) : node.child : null;
    }
    let result = node || this.root;
    return min(result);
  },
  getMax:function(node){
    function max(node){
      return node ? node.right ? max(node.right) : node.child : null;
    }
    let result = node || this.root;
    return max(result);
  }
};
//   //查找特定值
//   find(data){
//     const findNode = (node,data) => {
//       if(node===null) return false;
//       if(node.data===data) return node;
//       return findNode((data < node.data)? node.left: node.right,data)
//     };
//     return findNode(this.root,data)
//
//   }
//   //删除节点
//   remove(data){
//     const removeNode = (node,data) => {
//       if(node === null) return null;
//       if(node.data === data){
//         if(node.left === null && node.right === null) return null;
//         if(node.left === null) return node.right;
//         if(node.right === null) return node.left;
//         if(node.left !==null && node.right !==null){
//           let _node = this.getMin(node.right);
//           node.data = _node.data;
//           node.right = removeNode(node.right,data);
//           return node
//         }
//       } else if(data < node.data){
//         node.left=removeNode(node.left,data);
//         return node
//       } else {
//         node.right=removeNode(node.right,data);
//         return node
//       }
//     };
//     return removeNode(this.root,data)
//   }
// }
// //创建BST
// const tree = new BinarySearchTree();
const tree = new Tree();
tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
// console.log(tree);
// console.log(tree.root);
// //前序遍历BST
// console.log(tree.qianxuBianli());
// //中序遍历BST
// console.log(tree.zhongxuBianli());
// console.log(tree.houxuBianli());
console.log(tree.getMax());
// //后序遍历BST
// console.log(tree.postOrder());
// //搜索最小值
// console.log(tree.getMin());
// //搜索最大值
// console.log(tree.getMax());
// //查找特定值
// console.log(tree.find(2));
// console.log(tree.find(3));
// console.log(tree.find(20));
// //删除节点，返回新的二叉树，不改变原来的二叉树
// console.log(tree.remove(11));
// a=tree.remove(11);
// console.log(a.root);
// console.log(tree);



