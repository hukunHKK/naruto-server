import { Sequelize } from 'sequelize'
import config from '../config';

const sequelize = new Sequelize('naruto', 'root', 'Mysql_2019', {
  host: config.mysql.host,
  dialect: 'mysql',
  port: config.mysql.port
});

export default sequelize