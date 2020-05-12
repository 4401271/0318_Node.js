//1. 引入express模块
let express = require('express')

//2. 创建app对象
let app = express()

//3. 设置路由
//一级路由
app.get('/index', (req, res)=>{
    console.log(req.query)
    res.send("<h1>哈哈哈</h1>")
})
//二级路由
app.get('/login/user', (req, res)=>{
    res.send("成功访问用户登录页面....")
})
//参数路由
app.get('/food/fruits/:id', (req, res)=>{
    res.send(`开始访问美食->水果->第${req.params.id}款水果....`)
})

//设置监听
app.listen('8080', (err)=>{
    if(!err){
        console.log("http://localhost:8080成功启动....")
    }
})
