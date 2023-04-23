// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器绑定request事件，监听客户端请求
server.on('request', (req,res) => {
  // req是请求对象，她包含了与客户端相关的数据和属性，例如：
  // req.url是客户端请求的url地址
  // req.method是客户端的method请求类型
  const str = `your request url is ${req.url} and request method is ${req.method}`
  console.log(str)
  res.end(str)
})
// 启动服务器
server.listen(1212, function () {
  console.log('server running at http://127.0.0.1:1212')
})
