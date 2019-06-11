// 非递归实现的js代码
function binary_search(arr, key) {
  var low = 0,
    high = arr.length - 1;

  while(low <= high) {
    var mid = parseInt((high + low) /2);
    // console.log(mid+'h'+high+'l'+low);
    if(key === arr[mid]) {
      return mid;
    } else if(key > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid -1;
    }
  }
  return -1
}
