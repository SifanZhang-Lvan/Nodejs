const express = require('express')
const router = require('./14.apiRouter')

const app = express()

app.use(express.urlencoded({ extended: false }))

// 必须配置cors中间件之前，配置jsonp的接口
app.get('/api/jsonp', (req, res) => {
  // 定义jsonp接口具体的实现过程
})

app.use('/api', router)

app.listen('88', () => {
  console.log('server running at http://127.0.0.1:88')
})
