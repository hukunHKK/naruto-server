import Sequelize from 'sequelize'
import sequelize from './sequelize'

const User = sequelize.define('user', {
  user_id: {
    // Sequelize module has INTEGER Data_Type.
    type: Sequelize.INTEGER,
    // To increment user_id automatically.
    autoIncrement: true,
    // user_id can not be null.
    allowNull: false,
    // For uniquely identify user.
    primaryKey: true
  },
  id: { type: Sequelize.STRING, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  nickname: { type: Sequelize.STRING, allowNull: true },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
})

export default User