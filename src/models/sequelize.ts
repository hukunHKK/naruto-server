import { Sequelize } from 'sequelize'
import config from '../config';

const sequelize = new Sequelize('naruto', 'root', '123456', {
  host: config.mysql.host,
  dialect: 'mysql',
  port: config.mysql.port
});

export default sequelize