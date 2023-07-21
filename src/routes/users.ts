import Router from '@koa/router'
import user from '../models/user'
// import geoip from 'geoip-lite'

// var ip = "112.95.173.169";
// var geo = geoip.lookup(ip);
// console.log(geo);
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
    ctx.body = {
      code: 1,
      message: '登录成功',
    }
  } else {
    ctx.body = {
      code: 0,
      message: '这是哪个沙雕',
    }
  }
})

export default router
