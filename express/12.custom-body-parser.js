const qs = require('querystring')

const bodyParser = (req, res, next) => {
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
}

module.exports = bodyParser
