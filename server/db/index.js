//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Campaign = require('./models/Campaign')

//associations could go here!
Campaign.belongsTo(User)
User.hasMany(Campaign)

module.exports = {
  db,
  models: {
    User,
    Campaign
  },
}
