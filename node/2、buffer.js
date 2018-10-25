/**
 * Created by bankermacpro on 2018/6/3.
 *
 * buffer类，在js中没有处理二进制的方法，于是在node中引用了buffer来处理二进制数据
 *
 * 出现的背景：
 *
 *    在es6引入typescript之前，js没有能读取或者操作二进制数据流的机制，
 *
 *    buffer 类似于整数数组，但它的大小是固定的，在创建的时候就被固定无法调整，且在v8堆外分配物理内存
 *
 *    buffer是一个全局变量，无需require引入；
 *
 *  备注：【】中的参数是可选参数
 */
/* const a = Buffer.from(); */
//可以接收的参数有：
//array   创建一个包含所提供的字节数组的副本的buffer
//buffer  创建一个包含所提供的字节buffer的副本的buffer
//string  创建一个包含所提供的字节字符串的副本的buffer
//object  创建一个包含所提供的字节对象的副本的buffer
//arrayBuffer  创建一个包含所提供的arrayBuffer的副本的buffer

/* const a = Buffer.alloc('size'，【'用来填充的值'，'编码'】); */
//创建一个指定大小的被填满的buffer实例，这个方法会明显地比allocUnsafe慢，但确保新创建的buffer实例绝不会包含旧的和潜在的数据   接收一个size参数用来指定buffer的大小
//如果新创建的buffer的长度超过buffer.contants.MAX_LENGTH 或者小于0的时候回抛出异常


/* const a = Buffer.allocUnsafe(10); */
//a.fill(0);
//跟上个方法相同，但不同的是创建的buffer可能含有敏感数据  可以用fill方法填满

/* Buffer.allocUnsafe('size') 和 Buffer.allocUnsafeSlow('size') 创建的buffer是未初始化的，可能含有旧数据 */

/* Buffer的字符编码 */
  //ascii   仅支持7位ASCII数据
  //utf8
  //utf16le 小字节序编码的Unicode
  //ucs2    utf16le的别名
  //base64  base64编码
  //latin1  是一种把buffer编码成一字节变大的字符串的方式
  //binary  latin1的别名
  //hex     将每个字节编码为两个十六进制字符

/* Buffer.byteLength('要计算长度的值',【'编码'】)  编码默认为utf8 */
// const a = Buffer.byteLength('熬枯受淡焚枯食淡发卡行','utf8');

/* Buffer.compare(buf1,buf2) */
//比较两个buffer是否相等的函数 ,如果两个buffer相等则返回0 如果不相等则返回1
// const one = Buffer.from('1234');
// const two = Buffer.from('1234');
// const a = Buffer.compare(one,two);

/* Buffer.concat(要合并的数组.[总长度]) */
//返回一个合并了数组中所有的buffer实例新的buffer
// const b1 = Buffer.alloc(10,1);
// const b2 = Buffer.alloc(10,2);
// const b3 = Buffer.alloc(10,3);
// const a = Buffer.concat([b1,b2,b3],30);


/* Buffer.ifBuffer(obj) */
//如果参数是一个buffer则返回true  否则返回false

/* Buffer.isEncoding('要检查的编码格式') */
//检查是否是参数所指定的编码格式，如果是，返回true  否则返回false；

/* Buffer.poolSize  默认是8192  用于决定预分配的，可以修改，表示内部buffer实例池大小的字节数 */

/*-----------------------------------------------------------------------*/
/* 下面用创建出来的实例来解释下buffer的方法 */
/* buf.compare('要比较的buffer'，'参数中的开始偏移量'，'参数中的结束偏移量'，'buf的开始偏移量'，'buf的结束偏移量') */
//如果参数中的位置在buf之后，则返回-1   在前面则返回1   相等则返回0
// const b1 = Buffer.alloc(10,1);
// const b2 = Buffer.alloc(20,1);
// const a = b1.compare(b2,11,10,0,0);

/* buf.copy('要比较的buffer'，'参数中的开始偏移量'，'buf的开始偏移量'，'buf的结束偏移量') */
// const b1 = Buffer.alloc(10,1);
// const b2 = Buffer.alloc(20,1);
// const a = b1.copy(b2,11,10,0,0);

/* buf.entries()返回一个迭代器，类似于Object.entries() */

/* buf.equals('另一个buffer') 比较两个buffer是否相等*/

/* buf.fill('要填充的值') 将新创建的buffer填满*/

/* buf.includes('要查询的值'，【偏移量，编码】) */
//查询buf中是否包含要查询的值，从哪开始，编码是什么  如果包含则返回true  否则返回false

/* buf.indexOf() */
//跟上边那个方法相同，不同的是返回值，如果找到返回首次出现的位置，没有找到则返回-1；

/* buf.keys() */
//返回一个包含键名的迭代器

/* buf.values() */
//返回一个包含值名的迭代器

/* buf.lastIndexOf() */
//对比include和indexOf都是查找，不同的是如果找到则返回最后一次出现的位置，否则返回-1

/* buf.length() */
//返回buf的长度，返回的是字节数上分配的内存量

/* buf.slice('开始位置'，'结束位置') */
//返回一个新的buffer切片，从开始位置切到结束位置

/* buf.toJson() */
//返回buf的JSON形式

/* buf.toString() */
//返回buf的字符串形式

/* buf.write('字符串',[要跳过的字节数，要写入的字节数，编码]) */
//写入一个buffer

/* buffer.INSPEST_MAX_BYTES 当调用bud.inspect时返回的最大字节数 */

/* buffer.kMaxlength  分配给单个buffer实例的最大内存 */

/* buffer.transcode('要转换的buffer','当前编码'，'目标编码') */
//转换指定buffer的编码

/* buffer contants */
/* buffer.contants.MAX_LENGTH */
//单个buffer实例允许的最大亮度

/* buffer.contants.MAX_STRING_LENGTH */
//单个string允许的最大亮度


console.log(a);