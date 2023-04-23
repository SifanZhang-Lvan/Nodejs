// 导入express
const express = require('express')

// 创建web服务器
const app = express()

app.get('/', (req, res) => {
  // 制造错误
  throw new Error('服务器内部发生了错误')
  res.send('homePage')
})

// 定义错误级别的中间件，捕获项目的异常错误，防止程序崩溃
app.use((err, req, res, next) => {
  console.log('err' + err.message)
  // 客户端响应错误相关的内容
  res.send('err' + err.message)
})

// 启动web服务器
app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})
