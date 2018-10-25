/**
 * Created by bankermacpro on 2018/6/22.
 *
 * 子进程模块
 *
 * 类似于h5 的webWorker都是用来处理计算量较大的服务
 *
 * 子进程一般情况下是每个子进程只负责一种业务，细分子进程任务，
 * 具体api如下
 *
 */

//首先引入child_process模块
const child = require('child_process');


/* ------------- child共有以下几种方法 ------------- */
/*1、child.exec();
*
* 接收两个参数，第一个是要运行的命令行命令，第二个是一个回调函数；
* */

// child.exec('cat ./demo/grab.js',(stderr,stdout)=>{
//   console.log(2);
//   console.log(stdout);
//   console.log(3);
//   console.log(stderr);
// });


/*2、child.execFile();   运行一个可执行文件
*
* 接收三个参数。第一个是运行的命令，第二个是运行的指令   第三个是回调函数
* 比如说要查询node的版本号 则第一个参数为node  第二个参数为-v
*
* */
// child.execFile('node',['demo/grab.js'],(stderr,stdout) => {
//   console.log(stderr);
//   console.log(stdout);
// });


/*3、child.spawn();      运行一句命令行命令  不阻塞node事件循环
*
* 接收的参数为   第一个是命令  第二个是命令要运行的哪个文件
* */
//child.spawnSync()这一句是阻塞node事件循环的
// const ls = child.spawn('cat',['./demo/grab.js']);
// ls.stdout.on('data',(data)=>{
//   console.log(data);
// });
// ls.on('close',(data)=>{
//   console.log(data);
// });

/*4、child.fork();       复制node进程*/
// const worker = child.fork('./demo/grab.js');
// worker.on('message',(data) => {
//   console.log(data);
// });
// worker.send('hello');


/* stdio 用于配置子进程与父进程之间建立的管道，默认情况下子进程的stdin  stdout stderr  都会重定向到childprocess 对象上相应的stdin  stdout  stderr 意味着将stdio设置成了
* 【'pipe'，'pipe'，'pipe'】
*
* */

/* ========================  凡是有Sync的都是同步方法  =================== */

/*同步的方法都是阻塞node事件循环的  上边的三个方法（fork除外），后边加上sync就是同步的方法*/

//子进程的事件

/*、close事件  会返回两个参数，如果子进程是退出自身，则第一个是退出吗，第二个是被终止的信号*/

/*、disconnect事件
父进程调用suprocess.disconnect
或者子进程自己调用process.disconnect 的时候触发。
断开后不会在接收信息
*/

/*exit事件
* 通close一样，返回的两个参数
*
* */

/*message事件
 * process.send的时候回触发message事件
 *
 * */

/*subprocess.channel 代表的是子进程的IPC通道的管道
 *
 *如果当前没有IPC通道 则该属性为undefined
 * */

/*
 * subprocess.connected
 *
 * 如果连接成功，则这个返回true  在调用disconnect后，这个状态会变成false
 * */

/* subprocess.disconnect()
 *
 * 关闭父进程与子进程之间的IPC通道，调用后，父子进程之间不能再传递信息
 * */


/* subprocess.kill()
 *
 * 如果没有给定参数，则会默认为SIGTERM
 *
 * 注意： 当调用kill时候 ，已经发送到子进程的信号可能没有实际终止该进程
 *
 *
 * */

/*
 * subprocess.killed
 *
 * 当调用了kill 方法后，这个会设置成true
 *
 *
 * */

/*
 * subprocess.pid()
 *
 * 子进程的进程标识
 *
 * */

/*
 * subprocess.send('message',[sendHandle,{},callback])
 *
 * 子进程通过IPC通道发送信息，当子进程是一个node实例的时候，消息可以通过process.on('message') 事件来接收  可以发送对象
 *
 * */

//子进程同样有 stdin stdout stdio stderr等几个参数，作用不如父进程中的大，

