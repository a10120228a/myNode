//设计模式之单例模式

//1.懒汉式实现方式 使用对象实例的时候才会创建

var S = (function(){
  var result = null;

  var Animal = function(){};

  return {
    getAnimal:function(){
      if(!result){
        result = new Animal();
      }
      return result;
    }
  }
}());

let cat1 = S.getAnimal();
let cat2 = S.getAnimal();

//2.饿汉式实现方式 在加载对象的时候就创建了实例

var S2 = (function(){
  var result = new Animal();
  function Animal(){}
  return {
    getAnimal:function(){
      return result;
    }
  }
}());

let cat3 = S2.getAnimal();
let cat4 = S2.getAnimal();
console.log(cat3 === cat4);//true ? false


