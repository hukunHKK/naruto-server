import Sequelize from 'sequelize'
import sequelize from './sequelize'
import { v4 as uuidv4 } from 'uuid'

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

const users = [
  {
    id: uuidv4(),
    name: '张良宇',
  },
  {
    id: uuidv4(),
    name: '董君瑀',
  },
  {
    id: uuidv4(),
    name: '陈文浩',
  },
  {
    id: uuidv4(),
    name: '胡坤坤',
  },
  {
    id: uuidv4(),
    name: '孔伟龙',
  },
  {
    id: uuidv4(),
    name: '涂文博',
  },
  {
    id: uuidv4(),
    name: '周文杰',
  },
  {
    id: uuidv4(),
    name: '周茂',
  },
  {
    id: uuidv4(),
    name: '杨畅',
  },
  {
    id: uuidv4(),
    name: '李周华',
  },
]

const initData = async () => {
  await User.sync()
  const count = await User.count()
  if (count === 0) {
    users.forEach(item => User.create(item))
  }
}
initData()
export default User