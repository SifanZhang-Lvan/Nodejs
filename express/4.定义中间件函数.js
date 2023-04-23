// 导入express
const express = require('express')

// 创建web服务器
const app = express()

// 定义一个中间件函数
const mw = function (req, res, next) {
  console.log('中间件函数')
  // 把流转关系，转交给下一个中间件或路由
  next()
}

// 全局生效的中间件
app.use(mw)

app.use((req, res, next) => {
  console.log('这是一个简化的中间件')
  next()
})

app.get('/', (req, res) => {
  res.send('homePage')
})

app.get('/user', (req, res) => {
  res.send('user page')
})

// 启动web服务器
app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})
