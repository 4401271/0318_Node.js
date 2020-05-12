//1. 引入mongoose
let mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

//构建一个Promise实例
let dbPromise = new Promise((resolve, reject)=>{
    //2. 连接数据库
    mongoose.connect('mongodb://localhost:27017/demo', {useUnifiedTopology: true})

    //3. 绑定监听
    mongoose.connection.once('open', (err)=>{
        if(!err){
            console.log("数据库连接成功！")
            resolve()
        }else{
            reject(err)
        }
    })
})

/*操作数据库的代码*/
;(async()=>{
    await dbPromise

    //1. 引入Schema  ------  请了一位保安
    let Schema = mongoose.Schema

    //2. 创建一个约束对象  ------  指定party入场要求
    let studentSchema = new Schema({
        stu_id:{
            type:String,
            required:true,   //必须填写
            unique:true   //唯一
        },
        name:{
            type: String,
            required: true
        },
        age:{
            type:Number,
            required: true
        },
        sex:{
            type:String,
            required:true
        },
        hobby:[String],
        info:Schema.Types.Mixed,   //接收所有类型的数据
        date:{
            type:Date,
            default:Date.now()
        },
        enable_flag:{
            type:String,
            default: 'Y'
        }
    })

    //3. 创建约束对象 ------  告诉保安规则
    let studentModel = mongoose.model('student', studentSchema)

    //4. 数据的增删改查
    //增
    /*let result = studentModel.create({
        // stu_id:'20200511001',
        // name:'孙尚香',
        // age:18,
        // sex:'女',
        // hobby:['一二连发', '欺负前期英雄'],
        // info:'爆发英雄，前期很菜'

        // stu_id:'20200511002',
        // name:'孙甄姬',
        // age:20,
        // sex:'女',
        // hobby:['敌人站一起', '米莱迪'],
        // info:'出了半肉的甄姬谁都不怕了'

        stu_id:'20200511003',
        name:'貂蝉',
        age:20,
        sex:'女',
        hobby:['敌人站一起', '天秀反杀'],
        info:'对面可千万别处魔女和制裁！'
    })
    console.log(await result)*/

    //查
    /*let result = studentModel.findOne({age:20}, {name:1, sex:1, _id:0})
    console.log(await result)*/

    //改
    /*let result = studentModel.updateMany({age:20}, {sex:'女'})
    console.log(await result)*/

    //删
    // let result = studentModel.deleteMany({sex:"男"})
    // console.log(await result)
})()