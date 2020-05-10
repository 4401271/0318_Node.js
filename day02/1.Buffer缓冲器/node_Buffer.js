/*
* Buffer是什么？
*   1. 它是一个类似于数组的对象，用于存储数据（存储的是二进制数据）
*   2. Buffer的效率很高，存储和读取很快，直接对计算机的内存进行操作
*   3. Buffer的大小一旦确定，不可修改
*       数组定义时即使限定了大小，通过push也可以再往里面追加内容，扩大数组，就好比先拿了一瓶啤酒，不够了再要
*       Buffer则是就这几瓶，不够喝了也没了
*   4. Buffer是Node中的非常核心的模块，无需下载、引入即可使用
*
*
* 创建Buffer的方法：
*   1. 实例化对象  即将被废弃，效率很低，但是程序员都在用这个
*   var buf = new Buffer(10)
*
*   2. alloc()
*   var buf = Buffer.alloc(10)
*
*   3. allocUnsafe()
*   var buf = Buffer.allocUnsafe(10)
* */