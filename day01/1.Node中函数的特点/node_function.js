/*
* 1. 在Node中， 所有的模块（JS文件），运行的时候，都被自动包裹了一个外层函数
* function (exports, require, module, __filename, __dirname) {}
*   exports ---> 用于暴露模块
*   require ---> 用于引入模块
*   module ---> 用于暴露模块
*   __filename ---> 文件所在的绝对路径
*   __dirname ---> 文件所在文件夹的绝对路径
*
* 2. 这个外层函数什么用？
*   1. 能让Node直接使用CommonJS语法
*   2. 隐藏内部实现 // 处于安全考虑，funn内部的代码不可以让外部访问，因此这个外层函数就可以起到一个隐藏的作用
* */

//callee可以查看当前行所在的函数结构，借助toString就可以将结构转换为字符串
console.log(arguments.callee.toString())

/*
function demo() {
  console.log(arguments.callee)
}
demo()*/
