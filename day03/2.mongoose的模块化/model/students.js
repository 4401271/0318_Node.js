/*
* 该模块用于创建students模型
* */

//引入mongoose
let mongoose = require("mongoose")

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
module.exports = mongoose.model('student', studentSchema)
