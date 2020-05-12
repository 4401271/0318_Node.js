// 1.引入mongoose
let mongoose = require('mongoose')

//构建一个Promise实例，
let dbPromise = new Promise((resolve, reject)=>{
    // 2.连接数据库
    mongoose.connect('mongodb://localhost:27017/demo')

    // 3.绑定监听
    //on：每点一次执行一次   once：只执行一次     数据库无论是连接成功还是失败都不需要连接第二次
    mongoose.connection.once('open', (err)=>{
        if (!err){
            console.log("数据库连接成功！")
            resolve()
        }else {
            console.log("数据库连接失败！请重试...")
            reject(err)
        }
    })
})

// 4.调用dbPromise
// 方法一：不常用
// dbPromise.then(()=>{}, ()=>{})
// 方法二：不常用
// dbPromise.then(()=>{}).catch(()=>{})
// 方法三：IIFE写法（常用）
;(async ()=>{
    //”异步编码流程以同步展现出来“就在这里，await会等待每一个实例完成之后再去执行下一个await，这里面的执行就包括其中的回调函数
    //所以使用promise就可以解决回调地狱的问题，这个函数包括其中的回调函数执行完，才去执行接下来的内容
    await dbPromise
    console.log("下面是操作数据库的代码...")
})()