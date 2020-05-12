/*
* 该模块专门用于连接数据库
* */

/*如需更改只需要更改端口号和数据库名称*/
const PORT = 27017  //数据库端口名
const DB_NAME = 'demo'  //数据库名称

//1. 引入mongoose
let mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

//构建一个Promise实例
module.exports = new Promise((resolve, reject)=>{
    //2. 连接数据库
    mongoose.connect(`mongodb://localhost:${PORT}/${DB_NAME}`, {useNewUrlParser:true})

    //3. 绑定监听
    mongoose.connection.once('open', (err)=>{
        if(!err){
            console.log(`位于本机的${PORT}端口的${DB_NAME}数据库连接成功！`)
            resolve()
        }else{
            reject(err)
        }
    })
})
