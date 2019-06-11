let arr = []

for(let i = 0;i < 60;i ++){
  arr.push(i)
}

let countObj = {};
let result = {};

function count() {
  for(let i = 0;i < 60;i ++){
    result[i] = [];
    let len = 0;
    while(len < 3){
      pushElement(result[i])
      len ++
    }
  }
}
count();

function pushElement(result){
  let index = Math.floor(Math.random() * (arr.length))
  let random = arr[index];
  if(!result.includes(random)){
    if(countObj[random] === 3){
      arr.splice(index,1)
      pushElement(result)
      return
    }else if(!countObj[random]){
      countObj[random] = 1
    }else{
      countObj[random] ++
    }
    result.push(random)
  }else{
    pushElement(result)
  }
}


let ooo = {};
for(let i = 0;i < 60;i ++){
  for(let j = 0;j < result[i].length;j++){
    let item = ooo[result[i][j]]
    if(item){
      ooo[result[i][j]] ++
    }else{
      ooo[result[i][j]] = 1
    }
  }
}
console.log(Object.values(ooo).every((item) => {return item === 3}))
