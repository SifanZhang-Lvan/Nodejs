const path = require('path')

const filePath = '/a/b/c/d/index.html'
const fileext = path.extname(filePath)

console.log(fileext) // 输出.html