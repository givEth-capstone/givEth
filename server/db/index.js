

const db = require('./db')

const User = require('./models/User')
const Campaign = require('./models/Campaign')
<<<<<<< HEAD

Campaign.belongsTo(User)
User.hasMany(Campaign)

=======

//associations could go here!
Campaign.belongsTo(User)
User.hasMany(Campaign)
>>>>>>> 09cfca4b1d4615ca5036f2b81f9eeb748abb3459

module.exports = {
  db,
  models: {
    User,
    Campaign
  },
}
