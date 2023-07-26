import Sequelize from 'sequelize'
import sequelize from './sequelize'

const LoginRecord = sequelize.define('loginRecord', {
  record_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  phone: { type: Sequelize.BOOLEAN, allowNull: false },
  validUser: { type: Sequelize.BOOLEAN, allowNull: false },
  user: { type: Sequelize.STRING, allowNull: false },
  code: { type: Sequelize.STRING, allowNull: true },
  createdAt: Sequelize.DATE,
})

const initData = async () => {
  await LoginRecord.sync()
}
initData()
export default LoginRecord