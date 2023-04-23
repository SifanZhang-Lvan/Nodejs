// 导入express
const express = require('express')

// 创建web服务器
const app = express()

// 挂载路由
app.get('/', (req, res) => {
  res.send('got a get request')
})

app.post('/', (req, res) => {
  res.send('got a post request')
})

// 启动web服务器
app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})
