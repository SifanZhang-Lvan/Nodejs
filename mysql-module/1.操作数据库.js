// 导入mysql模块
const mysql = require('mysql')
// 建立与MySQL数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库ip
  user: 'root',
  port: 3306,
  password: 'zsf19970413',
  database: 'nodejs_db' // 指定要操作哪个数据库
})

// // 测试mysql模块
// db.query('select 1', (err, results) => {
//   // 报错
//   if(err) return console.log(err.message)
//   // 正常执行
//   console.log(results)
// })

// // 查询users表中所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, results) => {
//   // 查询数据失败
//   if(err) return console.log(err.message)
//   // 注意：如果执行的是select查询语句，则执行的结果是数组
//   console.log(results)
// })

// const user = {
//   username: 'asd',
//   password: '1234'
// }
// // 代执行sql语句， 其中的？表示占位符
// const sqlStr = 'insert into users (username, password) values (?, ?)'
// // 使用数组的形式，依次为？占位符指定具体的值
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//   if (err) return console.log(err.message)
//   // 注意：如果执行的是insert into 插入语句，则results是一个对象
//   // 可以通过affectedRows属性，来判断是否插入数据成功
//   if(results.affectedRows === 1) {
//     console.log('插入数据成功')
//   }
// })

// // 插入数据的便携方式
// const user = {
//   username: 'zzz',
//   password: '123444'
// }
// const sqlStr = 'insert into users set ?'
// // 直接将数据对象当作占位符的值
// db.query(sqlStr, user, (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('插入数据成功')
//   }
// })
// 更新用户的信息
// const user = {
//   id: 4,
//   username: 'qwer',
//   password: '000'
// }
// const sqlStr = 'update users set username=?, password=? where id=?'
// db.query(sqlStr, [user.username, user.password, user.id],(err, results) => {
//   if(err) return console.log(err.message)
//   // 注意：执行了update语句之后，执行的结果也是一个对象，可以通过affecedRows判断是否更新成功
//   if(results.affectedRows === 1) {
//     console.log('更新数据成功')
//   }
// })
// // 更新数据的便携方式
// const user = {
//   id: 9,
//   username: 'bbbbb',
//   password: '000'
// }
// const sqlStr = 'update users set ? where id=?'
// // 调用db.query()执行sql语句的同时，使用数组依次为占位符指定具体的值
// db.query(sqlStr, [user, user.id],(err, results) => {
//   if(err) return console.log(err.message)
//   // 注意：执行了update语句之后，执行的结果也是一个对象，可以通过affecedRows判断是否更新成功
//   if(results.affectedRows === 1) {
//     console.log('更新数据成功')
//   }
// })
// // 删除id为4的数据
// const sqlStr = 'delete from users where id=?'
// // 注意：如果sql语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// // 如果sql语句中只有一个占位符，则可以省略数组
// db.query(sqlStr, 4, (err, results) => {
//   if (err) return console.log(err.messgae)
//   // 注意：执行delete语句之后，结果也是一个对象，也会包含affectedRows属性
//   if (results.affectedRows === 1) {
//     console.log('删除成功')
//   }
// })
// 标记删除 使用update语句替代delete语句；只更新数据的状态，并没有真正的删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 9], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('标记删除数据成功')
  }
})
