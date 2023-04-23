const express = require('express')
var session = require('express-session')

const app = express()

app.use(session({
  secret: 'keyboard cat', // secret 属性的值可以为任意字符串
  resave: false,
  saveUninitialized: true
}))