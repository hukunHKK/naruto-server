import { decrypt } from "../utils/crypto"

const whiteList = ['/naruto/user/login']

export default async (ctx, next) => {
  console.log(ctx);
  if (whiteList.includes(ctx.url)) {
    await next()
    return
  }
  const token = ctx.header.authorization
  if (!token) {
    ctx.body = {
      code: 403,
      message: '非法用户'
    }
  }
  try {
    const userInfo = decrypt(ctx.header.authorization, true)
    ctx.userInfo = userInfo
    await next()
  } catch (error) {
    ctx.body = {
      code: 403,
      message: '非法用户'
    }
  }
}