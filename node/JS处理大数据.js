a('2234728582639742973852836462365926397248738562352522','33373723749278372762763428347273875283497287357239472879523');
function a(a,b){
  let res = '';
  let c = 0;
  let d = 0;
  a = a.split('');
  b = b.split('');

  while(a.length || b.length || c){
    c += ~~a.pop() + ~~b.pop() + d;
    d = parseInt(c / 10);
    res = c % 10 + res;
    c = 0;
  }
  res = d ? d + res : res;
  console.log(res.replace(/^0+/,''));
}
