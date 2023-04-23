// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器绑定request事件，监听客户端请求
server.on('request', (req, res) => {
  // 包含中文
  const url = req.url
  let content = '<h1>404 Not Found</h1>'
  if (url == '/' || url == '/index.html') {
    content = '<h1>首页</h1>'
  }
  if (url == '/about.html') {
    content = '<h1>详情</h1>'
  }
  // 为了防止中文显示乱码问题，需要设置响应头Content-Type的值为text/html；charset=utf8
  res.setHeader('Content-Type', 'text/html; charset=utf8')
  // 向客户端发送指定内容，并结束这次请求的处理过程
  // 包含中文的内容响应给客户端
  res.end(content)
})
// 启动服务器
server.listen(1212, function () {
  console.log('server running at http://127.0.0.1:1212')
})
