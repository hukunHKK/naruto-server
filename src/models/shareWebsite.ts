import Sequelize from 'sequelize'
import sequelize from './sequelize'
import { v4 as uuidv4 } from 'uuid'

const Website = sequelize.define('website', {
  site_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  id: { type: Sequelize.STRING, allowNull: false },
  website: { type: Sequelize.STRING, allowNull: false },
  protocol: { type: Sequelize.STRING, allowNull: false },
  remark: { type: Sequelize.STRING, allowNull: true },
  createUser: { type: Sequelize.STRING, allowNull: false },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
})
const websites = [
  {
    id: uuidv4(),
    website: 'www.ikun370.xyz/index.html',
    protocol: 'https://',
    createUser: '胡坤',
  },
  {
    id: uuidv4(),
    website: '735hsck.cc',
    protocol: 'http://',
    createUser: '胡坤',
  },
]

const initData = async () => {
  await Website.sync()
  const count = await Website.count()
  if (count === 0) {
    websites.forEach(item => Website.create(item))
  }
}
initData()
export default Website