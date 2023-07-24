import { createTransport } from 'nodemailer';

const fromUser = '294418442@qq.com'
export const sendMailer = (data) => {
  return new Promise((resolve, reject) => {
    // 创建Nodemailer传输器 SMTP 或者 其他 运输机制
    let transporter = createTransport({
      service: "QQ", // 使用内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
      port: 465, // SMTP 端口
      secureConnection: true, // 使用 SSL
      auth: {
        user: fromUser,
        pass: 'vwrotipzeqsgbghh'
      },
      tls: {
        rejectUnauthorized: false, // 拒绝认证就行了， 不然会报证书问题
      },
    });
    // 定义transport对象并发送邮件
    transporter.sendMail(
      {
        from: fromUser, // 发送方邮箱的账号(需要和auth.user一致)
        to: data.address, // 邮箱接受者的账号
        subject: "验证码", // Subject line
        // text: '"Blog 👻"', // 文本内容
        html: `
            <p style="text-indent: 2em;">验证码：${data.code} </p>
        `,
      },
      (error, info) => {
        if (error) {
          resolve(0);
        }
        resolve(info);
      }
    );
  });
}