//1. 引入数据库连接模块
let db = require('./db')

//2. 引入模型对象
let studentModel = require('./model/students')
let teacherModel = require('./model/teachers')

//3. 操作数据库
;(async()=>{
    await db

    // let result = studentModel.find({age:20})
    // console.log(await  result)

    let infomation = teacherModel.create({
        teacher_id:'20200511006',
        name:'花木兰',
        age:27,
        sex:'女',
        hobby:['来啊，刚啊！谁怕谁', '爷有霸体！'],
        info:'别看我不动，但我不动的时候你就是打不死我！'
    })
    console.log(await infomation)

})()