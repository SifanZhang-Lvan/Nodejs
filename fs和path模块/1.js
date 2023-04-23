const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function (err, dataStr) {
  // 读取成功err为null
  // 读取失败err为错误对象 dataStr为undefined
  if (err) {
    console.log('读取文件失败' + err.message)
  }
  else console.log('读取文件成功' + dataStr)
})
