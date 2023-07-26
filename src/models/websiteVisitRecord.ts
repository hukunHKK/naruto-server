import Sequelize from 'sequelize'
import sequelize from './sequelize'
import { v4 as uuidv4 } from 'uuid'

const WebsiteVisitRecord = sequelize.define('websiteVisitRecord', {
  record_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  website: { type: Sequelize.STRING, allowNull: false },
  user: { type: Sequelize.STRING, allowNull: false },
  createdAt: Sequelize.DATE,
})

const initData = async () => {
  await WebsiteVisitRecord.sync()
}
initData()
export default WebsiteVisitRecord