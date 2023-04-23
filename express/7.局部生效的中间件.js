const express = require('express')

const app = express()

// 定义中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了局部生效的中间件')
  next()
}

// mw1 这个中间件只在当前路由中生效
app.get('/', mw1, (req, res) => {
  res.send('homePage')
})

// 不会影响到下面的路由
app.get('/user', (req, res) => {
  res.send('user page')
})

app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})
