/*
* 该模块用于创建students模型
* */

//引入mongoose
let mongoose = require("mongoose")

//1. 引入Schema  ------  请了一位保安
let Schema = mongoose.Schema

//2. 创建一个约束对象  ------  指定party入场要求
let userSchema = new Schema({
    user_email:{
        type:String,
        required:true,   //必须填写
        unique:true   //唯一
    },
    user_name:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
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
module.exports = mongoose.model('users', userSchema)
