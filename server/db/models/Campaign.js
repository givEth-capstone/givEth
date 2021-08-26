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
    //is there a way we can check this with an existing map API to make it a valid location
    //if not, consider removing this
  },
  needed: {
    type: Sequelize.INTEGER 
    //assuming users can request only whole dollar amounts
  },
  info: {
    type: Sequelize.TEXT
  },
  photoUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://via.placeholder.com/150'
  },
  tag: {
    type: Sequelize.ENUM('Arts', 'Community', 'Education', 'Emergency', 'Innovation', 'Family', 'Medical', 'Housing', 'Hunger')
  },
  status: {
    type: Sequelize.BOOLEAN, 
    defaultValue: true
  }
})

module.exports = Campaign