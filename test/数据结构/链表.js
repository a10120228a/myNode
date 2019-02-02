  function Node(element){
    this.element = element;
    this.next = null;
  }

  function LinkList(){
    this.head = new Node('head');
  }

  LinkList.prototype = {
    find:function(item){
      let currectNode = this.head;
      while (currectNode.element !== item) {
        currectNode = currectNode.next;
      }
      return currectNode;
    },
    add:function(element,item){
      let newNode = new Node(element);
      let current = this.find(item);
      newNode.next = current.next;
      current.next = newNode;
    },
    put:function(item){
      let head = this.head;
      while(head.next !== null){
        head = head.next;
      }
      head.next = new Node(item);
    },
    findPrev:function(item){
      let currect = this.head;
      while(currect.next !== null && currect.next.element !== item){
        currect = currect.next;
      }
      return currect;
    },
    removeNode:function(item){
      let current = this.findPrev(item);
      current.next = current.next.next;
    },
    toString:function(){
      let head = this.head;
      let arr = [];
      while(head && head.element !== null){
        arr.push(head.element);
        head = head.next;
      }
      return arr.slice(1);
    },
    size:function(){
      return this.toString().length;
    }
  };

  let linkList = new LinkList();
  linkList.put(2);
  linkList.put(3);
  linkList.put(4);
  linkList.put(5);
  linkList.put(6);
  linkList.put(7);
  linkList.add(8,2);
  linkList.removeNode(8);
  console.log(linkList.size());
  console.log(linkList.toString());

