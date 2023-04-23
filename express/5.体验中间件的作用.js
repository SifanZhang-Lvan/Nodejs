// 导入express
const express = require('express')

// 创建web服务器
const app = express()

app.use((req, res, next) => {
  // 获取请求到达服务器的时间
  const time = new Date()
  req.startTime = time
  console.log('这是一个简化的中间件')
  next()
})

app.use((req, res, next) => {
  // 获取请求到达服务器的时间
  const time = new Date()
  req.startTime = time
  console.log('这是一个简化的中间件')
  next()
})

app.get('/', (req, res) => {
  res.send('homePage' + req.startTime)
})

app.get('/user', (req, res) => {
  res.send('user page' + req.startTime)
})

// 启动web服务器
app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})
