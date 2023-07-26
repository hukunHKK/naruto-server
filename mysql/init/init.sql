-- docker-compose 启动 mysql 时的初始化代码

select "init start...";

-- 设置 root 用户可外网访问
use mysql;
SET SQL_SAFE_UPDATES=0; -- 解除安全模式，测试环境，没关系
update user set host='%' where user='root';
flush privileges;
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'; -- 密码参考 docker-compose.yml
FLUSH PRIVILEGES;
flush privileges;

select "init end...";
