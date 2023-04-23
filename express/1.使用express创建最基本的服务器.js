// 导入express
const express = require('express')

// 创建web服务器
const app = express()

// 监听客户端的GET和POST请求，并向客户端响应具体内容
app.get('/user', (req,res) => {
  // 调用express提供的res.send方法，向客户端响应一个json对象
  res.send({
    name: 'test',
    age: 18,
    gender: 'male'
  })
})

app.get('/', (req,res) => {
  // req.query默认是空对象
  // 可以通过req.query对象访问到，例如
  // req.query.name req.query.age
  console.log(req.query)
})

// 在url地址中，可以通过：参数名 的形式，匹配动态参数值
app.get('/user/:id/:name', (req,res) => {
  // req.params默认是空对象
  // 里面存放着通过：动态匹配到的参数值
  // req.query.name req.query.age
  console.log(req.params)
  res.send(req.params)
})

app.post('/user', (req,res) => {
  // 调用express提供的res.send方法，向客户端响应一个文本字符串
  res.send('request success')
})

// 启动web服务器
app.listen(88, () => {
  console.log('server running at http://127.0.0.1:88')
})