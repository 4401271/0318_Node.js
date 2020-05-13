//引入experss
let express = require('express')
//引入数据库连接模块
let db = require('./db')
//引入user模型对象
let usersModel = require('./model/users')
//引入app
let app = express()
const PORT = 27017
//连接数据库
//使用中间件解析post请求的请求体
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

db
    .then(()=>{
        //注册路由 ------ 业务路由 ------ 注册
        app.post('/register', async(req, res)=>{
            let {user_name,user_email,user_password,re_password} = req.body;

            //创建校验正则
            let emailREG = /^[a-zA-Z0-9_]{5,16}@[a-zA-Z0-9]{2,8}\.com$/
            let passwordREG = /^[a-zA-Z0-9_]{5,16}$/
            let userNameREG = /^[a-zA-Z0-9_#@!.]{6,20}$/

            if(!emailREG.test(user_email)){
                res.send("邮箱格式有误，请验证后再次输入！")
                return
            }else if(!passwordREG.test(user_password)){
                res.send("用户名格式有误，请验证后再次输入！")
                return
            }else if(!userNameREG.test(user_name)){
                res.send("用户名格式有误，请验证后再次输入！")
                return
            }else if(user_password !== re_password){
                res.send("两次密码不同！")
                return
            }

            //在数据库中查找该邮箱是否被注册过
            try {
                let findResult = await usersModel.findOne({user_email:user_email})
                if (findResult){
                    //邮箱已被注册
                    res.send(`${user_email}已被注册！请更换邮箱！`)
                }else{
                    //邮箱尚未注册
                    await usersModel.create({user_email:user_email,user_name:user_name,password:user_password})
                    res.send(`${user_email}注册成功！`)
                    console.log(`邮箱：${user_email}、姓名：${user_name} 的用户注册成功！时间：${Date.now()}`)
                }
            }catch (err) {
                res.send("当前网络不稳定，请稍后再试......")
                console.log(err)
            }

        })

        //登录路由 ------ 业务路由 ------ 登录
        app.post('/login', async(req, res)=>{
            let {user_email,user_password} = req.body;
            //创建校验正则
            let emailREG = /^[a-zA-Z0-9_]{5,16}@[a-zA-Z0-9]{2,8}\.com$/
            let passwordREG = /^[a-zA-Z0-9_]{5,16}$/
            if(!emailREG.test(user_email)){
                res.send("邮箱格式有误，请验证后再次输入！")
                return
            }else if(!passwordREG.test(user_password)){
                res.send("用户名格式有误，请验证后再次输入！")
                return
            }

            //在数据库中匹配数据
            try {
                let findResult = await usersModel.findOne({user_email:user_email, password:user_password})
                if (findResult){
                    console.log(`邮箱为：${user_email}的用户成功登录！`)
                    res.send('登陆成功！')
                }else{
                    console.log(`邮箱为：${user_email}的用户登录失败！`)
                    res.send('登录失败！邮箱或密码输入有误！')
                }
            }catch (e) {
                console.log(e)
            }
        })

        //UI路由 ------ 注册页面
        app.get('/register', (req, res)=>{
            res.sendFile(__dirname+'/public/register.html')
        })
        //UI路由 ------ 登录页面
        app.get('/login', (req, res)=>{
            res.sendFile(__dirname+'/public/login.html')
        })
    })
    .catch((err)=>{
        console.log(err)
    })

//绑定监听
app.listen(PORT, (err)=>{
    if (!err) console.log(`${PORT}服务器成功启动....`)
    else console.log(`${PORT}服务器启动失败，请检查后尝试再次启动！`)
})