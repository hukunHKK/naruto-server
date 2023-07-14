import { Sequelize } from 'sequelize'

let host = 'localhost', port = 3305
// if (process.env.NODE_ENV === 'prd') {
//   host = 'naruto-mysql'
//   port = 3305
// }
const sequelize = new Sequelize('naruto', 'root', '123456', {
  host,
  dialect: 'mysql',
  port
});

export default sequelize