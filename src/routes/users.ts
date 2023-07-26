import Router from '@koa/router'
import user from '../models/user'
import { sendMailer } from '../utils/nodemailer'
import loginRecord from '../models/loginRecord'
import { encrypt } from '../utils/crypto'

const router = new Router()

router.post('/naruto/user/login', async function (ctx, next) {
  const { name, phone } = ctx.request.body
  const res: any = await user.findOne({
    where: { name }
  })
  if (res) {
    loginRecord.create({
      phone,
      user: name,
      validUser: true
    })
    if (process.env.NODE_ENV === 'dev') {
      const { email, name, nickname, role } = res
      ctx.body = {
        code: 1,
        message: '登录成功',
        data: encrypt({ email, name, nickname, role }, true)
      }
      return
    }
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
    loginRecord.create({
      phone,
      user: name,
      validUser: false
    })
    ctx.body = {
      code: 0,
      message: '这是哪个沙雕',
    }
  }
})

router.post('/naruto/user/login/code', async function (ctx, next) {
  const { name, code, phone } = ctx.request.body
  const res: any = await user.findOne({
    where: { name, emailCode: code }
  })
  if (res) {
    const { email, name, nickname, role } = res
    loginRecord.create({
      phone,
      user: name,
      validUser: true,
      code
    })
    ctx.body = {
      code: 1,
      message: '登录成功',
      data: encrypt({ email, name, nickname, role }, true)
    }
  } else {
    loginRecord.create({
      phone,
      user: name,
      validUser: false
    })
    ctx.body = {
      code: 0,
      message: '验证码错误',
    }
  }
})
router.get('/naruto/user/getAll', async function (ctx, next) {
  const data = await user.findAll()
  ctx.body = {
    code: 1,
    message: '查询成功',
    data
  }
})
router.post('/naruto/user/websitePermission/update', async function (ctx, next) {
  const { websitePermission, name } = ctx.request.body
  const res = await user.update({ websitePermission }, {
    where: {
      name
    }
  })
  ctx.body = {
    code: 1,
    message: '修改成功',
    data: null
  }
})

export default router
