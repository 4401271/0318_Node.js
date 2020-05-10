/*
* 流式文件写入：
*   特点：以流的形式操作文件，不再是将文件一次性的封装到内存中，效率高，减少服务器压力
* */

//1. 构建一个流
let fs = require('fs')

//-----------------------------------------------------------------------

/*
//2. 创建一个可写流
let ws = fs.createWriteStream('./demo.txt')

//3. 监测流的状态
ws.on('open', ()=>{
    console.log("可写流打开了")
})
ws.on('close', ()=>{
    console.log("可写流关闭了")
})

//4. 写入数据
ws.write('我很开心\n')
ws.write('我很开心!\n')
ws.write('我很开心!!\n')

ws.close() //node V8版本以及以前会导致数据丢失，改用ws.end()
*/

//----------------------------------------------------------------------

/*
//创建一个可写流  可选参数：highWaterMark：每次流出水的量
let rs = fs.createWriteStream('./demo.txt', {
    highWaterMark: 64*1024  //64M
})

rs.on('open', ()=>{
    console.log("可读流打开了...")
})

rs.on('close', ()=>{
    console.log("可读流关闭了...")
})

//4.读取文件-----当给一个绑定了一个data事件，会自动触发数据的读取
re.on('data', (data)=>{
    console.log(data.toString())
})
*/

//----------------------------------------------------------------

//创建可读可写流
let rs = fs.createReadStream('./music.mp3')
let ws = fs.createWriteStream('./music_test.mp3')

//创建监控
rs.on('open', ()=>{
    console.log("可读流打开了...")
})
rs.on('close', ()=>{
    console.log("可读流关闭了...")
    //什么时候关闭可写流操作？当可读流结束时关闭即可，因为此时已经读取完毕，没有文件可以读了，自然就应该关闭可写流
    ws.end()
})
ws.on('open', ()=>{
    console.log("可写流打开了...")
})
ws.on('close', ()=>{
    console.log("可写流关闭了...")

})

//读取数据
rs.on('data', (data)=>{
    ws.write(data)
})