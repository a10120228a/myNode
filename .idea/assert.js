/**
 * Created by bankermacpro on 2018/6/3.
 */
var assert = require('assert').strict;

/*所有的assert模块抛出的错误都是AssertionError类的实例，AssertionError是Error的一个子类，用于表明断言的失败*/
// var err = new assert.AssertionError({
//   message:'很好',
//   actual:'',
//   expected:"",
//   operator:'',
//   stackStartFunction:()=>{console.log(1)}
// });
// console.log(err);

/*assert 是assert.ok的别名*/
// assert(1,2);

/*assert.deepStrictEqual(a,b,[c]) 测试a和b是否深度相等，深度相等意味着子对象中可美剧的自身属性也会被按以下规则递归比较*/
assert.deepStrictEqual({a:1},{b:3});
