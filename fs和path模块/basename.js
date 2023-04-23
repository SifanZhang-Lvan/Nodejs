const path = require('path')

const fpath = '/a/b/c/index.html'
const fullname = path.basename(fpath)
console.log(fullname) // 输出index.html

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) // 输出index