import Router from '@koa/router'
import loginRecord from '../models/loginRecord'

var router = new Router()

router.get('/naruto/loginRecord/get', async (ctx, next) => {
  const res = await loginRecord.findAll()
  ctx.body = {
    code: 1,
    message: '查询成功',
    data: res
  }
});


export default router