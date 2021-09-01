const Sequelize = require('sequelize')
const db = require('../db')

const Campaign = db.define('campaign', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  walletId: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  needed: {
    type: Sequelize.INTEGER 
  },
  info: {
    type: Sequelize.TEXT
  },
  photoUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://www.pngitem.com/pimgs/m/145-1450643_providing-encouragement-and-support-to-help-people-icon.png'
  },
  tag: {
    type: Sequelize.ENUM('Arts', 'Community', 'Education', 'Emergency', 'Innovation', 'Family', 'Medical', 'Housing', 'Hunger')
  },
  status: {
    type: Sequelize.BOOLEAN, 
    defaultValue: true
  },
  received: {
    type: Sequelize.STRING,
    defaultValue: '0'
  }
})

module.exports = Campaign