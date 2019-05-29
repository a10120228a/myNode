/**
 * Created by yangbo on 2018/6/3.
 * learn node path module
 */
var path = require('path');

/*如果第二个参数传递了，并且传递的是第一个参数的最后一部分，则会将第一个参数的文件名返回；否则，会将文件名和扩展名一起返回；*/
// var a = path.basename('/foo/bar/text.txt','.txt');
// console.log(a);

/*在苹果平台上，path.delimiter 返回的是冒号   在windows平台上，path.delimiter返回的是分号*/
// console.log(path.delimiter);

/*path.dirname 返回的是文件名的前边部分，*/
// console.log(path.dirname('/foo/bao/text.txt'));

/*这个方法返回的是文件的扩展名；*/
// console.log(path.extname('txt.html'));


/*在这几个方法中，root和dir是互斥的，base 和 ext name是互斥的，两者共存则只会显示前者，因为前者的权重比较高，他们的路径图是这样的*/

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘
// (请无视以上字符串中的空格，它们只是为了布局)

// var filename = path.format({
//   root:'/',
//   dir:'/home/dir',
//   base:'index.js',
//   ext:'.html',
//   name:'index'
// });
// console.log(filename);

/*该方法返回的是文件是否是绝对路径；*/
// var boolean = path.isAbsolute('foo/index.js');
// console.log(boolean);


/*这个方法是使用平台特定的分隔符把全部给定的path链接到一起。生成规范化的路径；*/
// console.log(path.join('/foo','bar','name','index.js'));
// console.log(path.join(__dirname + '/../index.js'));

/*这个方法是将给定的path规范化，会解析出正确的路径；*/
// console.log(path.normalize('/foo/bar/name/index.js/../..'));

/*这个方法与path.format 相反，path.format是将对象路径解析成path,path.parse是将path字符串解析成路径对象；*/
// console.log(path.parse('/foo/bar/name/index.js'));

/*这个方法提供了针对posix的实现*/
// console.log(path.posix());

/*这个方法返回的是如何从第二个路径寻找到第一个路径*/
// var path = path.relative('/foo/bar/name/index.js','/foo/bar/age/index.js');
// console.log(path);

/*路径从左向右解析，知道构造成一个绝对路径，如果参数解析完都没有构建一个绝对路径，则会将当前工作目录加上，如果没有参数，会默认返回当前的工作路径，生成路径之后，会将末尾的斜杠删除，除非是解析为根目录，长度为0的path片段会被忽略*/
// var path = path.resolve('/foo','/bar','/baz');
// console.log(path);

/*path.sep 返回的是平台特定的路径片段分隔符，和path.delimiter相同，只不过返回的字符不同*/
// console.log(path.sep);

/*只试用与在Windows平台上*/
// var path = path.toNamespacedPath('/foo/bar/name/index.js');
// console.log(path);

/*提供了path针对Windows的实现*/
// console.log(path.win32);
