// 导入express
const express = require('express')

// 创建web服务器
const app = express()

app.use((req, res, next) => {
  console.log('调用第一个中间件')
  next()
})

app.use((req, res, next) => {
  console.log('调用第二个中间件')
  next()
})

app.get('/', (req, res) => {
  res.send('homePage')
})

// 启动web服务器
app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})
