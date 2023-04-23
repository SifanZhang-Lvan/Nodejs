// 导入express
const express = require('express')

// 创建web服务器
const app = express()

// 除了错误级别的中间件，其他的中间件，必须在路由之前配置
// 通过express.json()这个中间件，解析表单中的json格式的数据
app.use(express.json())
// 通过urlencoded这个中间件，来解析表单中url-encoded格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // 服务器，可以使用req.body这个属性，来接受客户端发送过来的请求题数据
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
  console.log(req.body)
  res.send('ok')
})

app.post('/book', (req, res) => {
  // 服务器，可以使用req.body这个属性，来接受客户端发送过来的请求题数据
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
  console.log(req.body)
  res.send('ok')
})

// 启动web服务器
app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})
