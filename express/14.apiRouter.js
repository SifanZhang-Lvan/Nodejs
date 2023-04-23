const express = require('express')
const router = express.Router()

// 挂载对应的路由
router.get('/get', (req, res) => {
  // 调用req.query获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  // 调用res.send()方法，向客户端响应处理的结果
  res.send({
    status: 0, // 0 处理成功，1 处理失败
    msg: 'GET请求成功', // 状态描述
    data: query // 需要响应给客户端的数据
  })
})

router.post('/post', (req, res) => {
  // 调用req.body获取请求体中包含的url-encoded格式的数据
  const body = req.body
  // 调用res.send()方法，向客户端响应处理的结果
  res.send({
    status: 0, // 0 处理成功，1 处理失败
    msg: 'POST请求成功', // 状态描述
    data: body // 需要响应给客户端的数据
  })
})

module.exports = router
