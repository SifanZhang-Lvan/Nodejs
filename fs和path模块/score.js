const fs = require('fs')
fs.readFile('./files/score.txt', 'utf8', function (err, dataStr) {
  if (!err) {
    let res = dataStr.split(' ').map(i => {
      return i.replace('=', ':')
    })
    // res.join('\r\n')
    fs.writeFile('./files/score-ok', res.join('\r\n'), function (err) {
      console.log(err)
    })
    console.log(res)
  } else console.log(err)
})
