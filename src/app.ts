const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

import './db/index'

// 中间件
import loginCheck from './middlewares/loginCheck'

// 路由
import shareWebsite from './routes/shareWebsite'
import users from './routes/users'
import websiteVisitRecord from './routes/websiteVisitRecord'
import loginRecord from './routes/loginRecord'
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(loginCheck)
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date().getTime() - start.getTime()
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(shareWebsite.routes(), shareWebsite.allowedMethods())
app.use(websiteVisitRecord.routes(), websiteVisitRecord.allowedMethods())
app.use(loginRecord.routes(), loginRecord.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
