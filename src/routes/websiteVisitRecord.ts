import Router from '@koa/router'
import websiteVisitRecord from '../models/websiteVisitRecord'

var router = new Router()

router.get('/naruto/websiteVisitRecord/get', async (ctx, next) => {
  const res = await websiteVisitRecord.findAll()
  ctx.body = {
    code: 1,
    message: '查询成功',
    data: res
  }
});
router.post('/naruto/websiteVisitRecord/add', async (ctx, next) => {
  const data = ctx.request.body
  await websiteVisitRecord.create(data)
  ctx.body = {
    code: 1,
    message: '',
    data: null
  }
});


export default router