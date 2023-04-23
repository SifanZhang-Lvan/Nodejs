const tool = require('./sifan-tool/index')

const dateFormat = tool.dateFormat

const str = dateFormat(new Date())

console.log(str)