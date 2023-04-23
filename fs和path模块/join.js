const path = require('path')
const str = path.join('/a','/b/c','../','./d', 'e')
// 输出/a/b/d/e
console.log(str)

const str2 = path.join(__dirname, './files/1.txt')
// 当前文件所在目录/files/1.txt
console.log(str2)