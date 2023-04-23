// 导入数据库操作模块
const db = require('../db/index')

// 导入bcryptjs
const bcrypt = require('bcryptjs')

// 导入生成 Token 的包
const jwt = require('jsonwebtoken')
const config = require('../config')

// 注册处理函数
exports.regUser = (req, res) => {
  // 获取提交到服务端的数据
  const userInfo = req.body
  // 对表单数据进行合法校验
  // if (!userInfo.username || !userInfo.password) {
  //   // return res.send({
  //   //   status: 1,
  //   //   message: '用户名或密码不合法'
  //   // })
  //   return res.cc('用户名或密码不合法')
  // }
  // sql语句
  const sql = 'select * from ev_users where username=?'
  db.query(sql, userInfo.username, (err, results) => {
    // 执行sql失败
    if (err)
      // return res.send({
      //   status: 1,
      //   message: err.message
      // })
      return res.cc(err)
    // // 用户被占用
    if (results.length > 0) {
      // return res.send({
      //   status: 1,
      //   message: '用户名被占用，请更换其他用户名'
      // })
      return res.cc('用户名被占用，请更换其他用户名')
    }
    // 调用bcrypt.hashSync()对密码进行加密,参数（明文密码，随机盐长度，一般为10）
    userInfo.password = bcrypt.hashSync(userInfo.password, 10)
    // 插入用户sql语句
    const sqlStr = 'insert into ev_users set ?'
    db.query(sqlStr, { username: userInfo.username, password: userInfo.password }, (err, results) => {
      if (err) {
        // return res.send({
        //   status: 1,
        //   message: err.message
        // })
        return res.cc(err)
      }
      // 判断影响行数是否为1
      if (results.affectedRows !== 1) {
        // return res.send({
        //   status: 1,
        //   message: '注册用户失败'
        // })
        return res.cc('注册用户失败')
      }
      // res.send({
      //   status: 0,
      //   message: '注册成功'
      // })
      res.cc('注册成功', 0)
    })
  })
  // res.send('regUser success')
}

// 登录的处理函数
exports.login = (req, res) => {
  // 接收表单数据
  const userInfo = req.body
  const sql = 'select * from ev_users where username=?'
  db.query(sql, userInfo.username, (err, results) => {
    if (err) return res.cc(err)
    // 执行语句成功，但获取到的数据条数不等于1
    if (results.length !== 1) {
      return res.cc('登录失败')
    }
    // 判断密码是否正确
    const compareRes = bcrypt.compareSync(userInfo.password, results[0].password)
    if(!compareRes) return res.cc('密码错误')
    // 在服务端生成token字符串
    const user = { ...results[0], password: '', user_pic: '' }
    // 对用户信息进行加密，生成token字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn
    })
    // 将Token响应给客户端
    res.send({
      status: 0,
      message: '登录成功',
      token: 'Bearer ' + tokenStr
    })
  })
}
