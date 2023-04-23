const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'zsf19970413',
  database: 'nodejs_db'
})

module.exports = db