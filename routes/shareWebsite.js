import data from '../data/shareWebsite.json'
import Router from '@koa/router'
var router = new Router()

router.get('/naruto/shareWebsite/get', async (ctx, next) => {
  console.log(next);
  ctx.body = {
    code: 1,
    message: '查询成功',
    data
  }
});

router.get('/foo', function* (next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

export default router