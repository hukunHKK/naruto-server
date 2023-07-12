import Router from '@koa/router'
import shareWebsite from '../models/shareWebsite'
import { v4 as uuidv4 } from 'uuid'

var router = new Router()

router.get('/naruto/shareWebsite/get', async (ctx, next) => {
  const res = await shareWebsite.findAll()
  ctx.body = {
    code: 1,
    message: '查询成功',
    data: res
  }
});
router.post('/naruto/shareWebsite/add', async (ctx, next) => {
  const data = ctx.request.body
  const res = await shareWebsite.findOne({
    where: {
      website: data.website
    }
  })
  if (res) {
    ctx.body = {
      code: 0,
      message: '网站已存在',
      data: null
    }
  } else {
    await shareWebsite.create({
      ...data,
      id: uuidv4()
    })
    ctx.body = {
      code: 1,
      message: '新增成功',
      data: null
    }
  }
});
router.post('/naruto/shareWebsite/del', async (ctx, next) => {
  const data = ctx.request.body
  const res = await shareWebsite.destroy({
    where: data
  })
  if (res) {
    ctx.body = {
      code: 1,
      message: '删除成功',
      data: null
    }
  } else {
    ctx.body = {
      code: 0,
      message: '错误',
      data: null
    }
  }
});


export default router