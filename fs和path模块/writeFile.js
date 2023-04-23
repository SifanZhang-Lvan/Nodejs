const fs = require('fs')
fs.writeFile(__dirname +'/files/4.txt','writing...', function (err) {
  // 读取成功err为null
  // 读取失败err为错误对象
  console.log(err)
})
