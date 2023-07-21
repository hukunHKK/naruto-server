# Dockerfile
FROM node:16
WORKDIR /app
COPY . /app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
RUN npm config set registry http://registry.npm.taobao.org
RUN npm i
RUN npm run build

CMD npm run prd && npx pm2 log
