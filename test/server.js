let one = new Promise((res,rej) => {
  setTimeout(() => {
    res(1);
  },1000);
});
let two = new Promise((res,rej) => {
  setTimeout(() => {
    res(2);
  },2000);
});
let three = new Promise((res,rej) => {
  setTimeout(() => {
    res(3);
  },3000);
});
let four = new Promise((res,rej) => {
  setTimeout(() => {
    rej(4);
  },4000);
});
let arr = [one,two,three,four];

Promise.all(arr).then((result) => {
  console.log(result);
}).catch(() => {
  console.log(1);
}).finally(() => {
  console.log(2);
});
