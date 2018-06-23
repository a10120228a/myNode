/**
 * Created by bankermacpro on 2018/6/3.
 *
 * 断言测试模块
 */
var assert = require('assert');

/*所有的assert模块抛出的错误都是AssertionError类的实例，AssertionError是Error的一个子类，用于表明断言的失败*/
// var err = new assert.AssertionError({
//   message:'很好',
//   actual:'11',
//   expected:"22",
//   operator:'33',
//   code:'恒等于ERR_ASSERTION',
//   stackStartFunction:()=>{console.log(1)}
// });
// console.log(err);

/*assert 是assert.ok的别名*/
// assert(1,2);

/*assert.deepStrictEqual(a,b,[c]) 测试a和b是否深度相等，深度相等意味着子对象中可美剧的自身属性也会被按以下规则递归比较*/
// assert.deepStrictEqual({a:1},{a:2});

/*跳过错误处理函数*/
// assert.doesNotThrow(()=>{},'错误','错误信息');
// assert.doesNotReject();

/*抛出AssertionError错误，并带上错误信息，只接收一个参数*/
// assert.fail('错误了');

/*如果参数不是undefined或者null 则抛出错误  堆栈踪迹会包含传入的错误的所有帧，包括潜在的ifError自身新增的帧*/
// assert.ifError('错误了');

/*测试a和b是否深度相等，与assert.deepStrictEqual相反，如果a.b深度相等，则会抛出错误*/
// assert.notDeepStrictEqual(a,b,c);

/*测试是否深度相等*/
// assert.notStrictEqual();
// assert.strictEqual();

/*测试参数是否是真值，如果不是真值，则会抛出一个错误*/
// assert.ok();

/*捕捉一个错误处理函数*/
// assert.rejects();

/*抛出一个错误*/
// assert.throws();

