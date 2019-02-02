let arr = [20,41234,45,34645734,67,68,35683,6,546,23,45,345,237,437,36,83,62,45,63,62,5768,56,84,969,4,6783,6,235,14,51,4626457,568,58,679,0,324068,3,565];
//快速排序
function fastSort(array){
  if(array.length < 2){
    return array;
  }
  let len = Math.floor(array.length / 2);
  let left = [];
  let right = [];
  let myArr = [];
  let first = array[len];
  for(let i = 0;i < array.length;i ++){
    if(array[i] < first){
      left.push(array[i]);
    }else if(array[i] > first){
      right.push(array[i]);
    }
  }
  return myArr.concat(fastSort(left)).concat(first).concat(fastSort(right))
}
console.log(fastSort(arr));

