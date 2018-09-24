function count(x){
  if(x === 1){
    return 1;
  }else{
    return x * count(x - 1);
  }
}

let a = count(2);
console.log(a);
