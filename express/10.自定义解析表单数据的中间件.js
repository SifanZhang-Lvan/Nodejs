// 导入express
const express = require('express')
// 导入querystring
const qs = require('querystring')

// 创建web服务器
const app = express()

// 解析表单数据的中间件
app.use((req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 存储客户端发送的请求体数据
  let str = ''
  // 监听data事件
  req.on('data', chunk => {
    str += chunk
  })
  // 监听end事件
  req.on('end', () => {
    const body = qs.parse(str)
    req.body = body
    next()
  })
})

app.post('/', (req, res) => {
  res.send(req.body)
})

// 启动web服务器
app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})
