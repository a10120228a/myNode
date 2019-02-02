function LinkList(){
  let Node=function(element){
    this.element=element;
    this.next=null;
  };
  var list=[];
  let length=0;
  let head=null;
  let currNode=null;
  this.append=function(para){
    //链表尾部追加元素
    var node=new Node(para);
    var current;//一直指向上一个添加的节点
    if(head === null){
      //插入第一个元素
      head=node;
      currNode=head;
      // console.log(head);
    }else{
      //不是第一个元素
      //上一个的next指针指向当前node；
      currNode.next=node;
      // console.log(currNode);
      currNode=node;
    }
    length++;
  };
  this.getHead=function(){
    return head;
  };
  this.appendAt=function(element,index){
    if(index>=0 && index<=length){
      var node=new Node(element);
      var current=head;
      var previous;
      var position=0;
      if(index === 0){
        node.next=current;
        head=node;
      }else{
        while(position++<index){
          previous=current;
          current=current.next
        }
        node.next=current;
        previous.next=node;
      }
      length++;
      // return
    }else{
      console.log("参数错误");
    }
  };
  this.deleteAt=function(index){
    //从特定位置移除一个元素，index索引
    if(index>=0 && index<length){
      var previousNode=null;
      var node=head;
      var position=0;
      if(index === 0){
        head=node.next;
        return node.element;
      }else{
        // console.log(node);
        while(position++<index){
          // console.log(node);
          previousNode=node;
          node=node.next;
        }
        previousNode.next=node.next;
        return node.element;
      }
    }else{
      console.log("参数不正确！");
      return null;
    }
    length--;
  };
  this.size=function(){
    let counts = 0;
    function total(element){
      counts ++;
      if(element.next){
        total(element.next);
      }
    }
    total(head);
    return counts;
  };
  this.print=function(){
    var result=[];
    for(let i = 0, length1 = list.length; i < length1; i++){
      result[i]=list[i];
    }
    return result;
  }
}
var  linkList=new LinkList();
linkList.append('lorry1');
linkList.append('lorry2');
linkList.append('lorry3');
linkList.appendAt('lorry4',0);

linkList.appendAt('lorry5',0);
// 那么当前链表的元素顺序是 lorry5，lorry4，lorry1，lorry2，lorry3
// console.log(linkList.deleteAt(2));
let number = linkList.size();
console.log(number);
// console.log(linkList.getHead().next);//获取头元素的下一个元素
