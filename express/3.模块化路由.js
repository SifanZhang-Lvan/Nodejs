// 导入express
const express = require('express')

// 创建web服务器
const app = express()

// 导入路由模块
const router = require('./router')

// 注册路由模块
// app.use(router)
// 使用app.use()注册路由模块并添加统一的访问前缀/api
app.use('/api', router)

// 注意：app.use()函数的作用，就是来注册全局中间件

// 启动web服务器
app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})
