import data from '../data/shareWebsite.json'
import Router from '@koa/router'
var router = new Router()

router.get('/naruto/shareWebsite/get', async (ctx, next) => {
  ctx.body = {
    code: 1,
    message: '查询成功',
    data
  }
});


export default router