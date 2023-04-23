const db = require('../db/index')

const bcrypt = require('bcryptjs')

exports.getUserInfo = (req, res) => {
  const sql = 'select id, username, nickname, email, user_pic from ev_users where id=?'
  // 注意：req对象上的user属性，是token解析成功，express-jwt中间件挂载上去的
  db.query(sql, req.user.id, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) {
      return res.cc('查询用户信息失败')
    }
    res.send({
      status: 0,
      message: '获取用户信息成功',
      data: results[0]
    })
  })
}

// 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res) => {
  const sql = 'update ev_users set ? where id=?'
  db.query(sql, [req.body, req.body.id], (err, results) => {
    console.log(req.body)
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('修改用户信息失败')
    return res.cc('修改用户基本信息成功', 0)
  })
}

// 更新用户密码的处理函数
exports.updatepwd = (req, res) => {
  const sql = 'select * from ev_users where id=2'
  db.query(sql,req.user.id,(err,results) => {
    if(err) return res.cc(err)
    if(results.length!== 1) {
      return res.cc('用户不存在')
    }
    // 判断密码是否正确
    const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
    if(!compareResult) return res.cc('旧密码错误')
    const sqlStr = 'update ev_users set password=? where id=?'
    // 对新密码进行加密处理
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
    // 调用 db.query() 执行
    db.query(sqlStr, [newPwd, req.user.id], (err, results) => {
      if(err) return res.cc(err)
      if(results.affectedRows !== 1) return res.cc('更新密码失败')
      res.cc('更新密码成功', 0)      
    })
  })
}

// 更新用户头像处理函数
exports.updateAvatar = (req, res) => {
  const sql = 'update ev_users set user_pic=? where id=?'
  db.query(sql,[req.body.avatar, req.user.id], (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('更新头像失败')
    return res.cc('更新成功', 0)
  })
}
