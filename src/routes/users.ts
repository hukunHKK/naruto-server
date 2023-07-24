import Router from '@koa/router'
import user from '../models/user'
import { sendMailer } from '../utils/nodemailer'

const router = new Router()

router.post('/naruto/user/login', async function (ctx, next) {
  const { name } = ctx.request.body
  if (name === '胡坤') {
    ctx.body = {
      code: 0,
      message: '我是你爹',
    }
    return
  }
  const res = await user.findOne({
    where: { name }
  })
  if (res) {
    const code = Math.random().toString(10).slice(-4)
    const emailRes = await sendMailer({
      address: res.dataValues.email,
      code
    })
    if (emailRes === 0) {
      ctx.body = {
        code: 0,
        message: '验证码发送失败',
      }
    } else {
      await user.update({ emailCode: code }, {
        where: {
          name
        }
      })
      ctx.body = {
        code: 1,
        message: '输入验证码',
      }
    }
  } else {
    ctx.body = {
      code: 0,
      message: '这是哪个沙雕',
    }
  }
})

router.post('/naruto/user/login/code', async function (ctx, next) {
  const { name, code } = ctx.request.body
  if (name === '胡坤') {
    ctx.body = {
      code: 0,
      message: '我是你爹',
    }
    return
  }
  const res = await user.findOne({
    where: { name, emailCode: code }
  })
  if (res) {
    ctx.body = {
      code: 1,
      message: '登录成功',
    }
  } else {
    ctx.body = {
      code: 0,
      message: '验证码错误',
    }
  }
})

export default router
