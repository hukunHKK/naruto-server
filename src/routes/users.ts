import Router from '@koa/router'
var router = new Router()
import user from '../models/user'

router.post('/naruto/user/login', async function (ctx, next) {
  const { name } = ctx.request.body
  const res = await user.findOne({
    where: { name }
  })
  if (res) {
    ctx.body = {
      code: 1,
      message: '登录成功',
    }
  } else {
    ctx.body = {
      code: 0,
      message: '查无此人',
    }
  }
})

export default router
