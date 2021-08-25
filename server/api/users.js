const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router
const {requireToken} = require('./gatekeepingMiddleware')

//get logged in user
router.get('/',requireToken, async (req, res, next) => {
  try {
    const userId = req.user.id; // this returns the user from middleware
    const user = await User.findOne({
      where: {
        id: userId
      }
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})
