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
  email: { type: Sequelize.STRING, allowNull: true },
  emailCode: { type: Sequelize.STRING, allowNull: true },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
})

const users = [
  {
    id: uuidv4(),
    name: '张良宇',
    email: '422878896@qq.com',
  },
  {
    id: uuidv4(),
    name: '董君瑀',
    email: '897484384@qq.com',
  },
  {
    id: uuidv4(),
    name: '陈文浩',
    email: '550652386@qq.com',
  },
  {
    id: uuidv4(),
    name: '胡坤坤',
    email: '13538149650@139.com'
  },
  {
    id: uuidv4(),
    name: '孔伟龙',
    email: '381303793@qq.com',
  },
  {
    id: uuidv4(),
    name: '涂文博',
    email: '1038498220@qq.com',
  },
  {
    id: uuidv4(),
    name: '周文杰',
    email: '1414780699@qq.com',
  },
  {
    id: uuidv4(),
    name: '周茂',
    email: '944893426@qq.com',
  },
  {
    id: uuidv4(),
    name: '杨畅',
    email: '457461303@qq.com',
  },
  {
    id: uuidv4(),
    name: '李周华',
    email: '453296211@qq.com',
  },
]

const initData = async () => {
  await User.sync({ force: true })
  const count = await User.count()
  if (count === 0) {
    users.forEach(item => User.create(item))
  }
}
initData()
export default User