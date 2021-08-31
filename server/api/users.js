const router = require('express').Router()
const { models: { User , Campaign}} = require('../db')
module.exports = router
const {requireToken} = require('./gateKeepingMiddleware')

// o: remove these before the end of the project
//get logged in user
// router.get('/',requireToken, async (req, res, next) => {
//   try {
//     const userId = req.user.id; // this returns the user from middleware
//     const user = await User.findOne({
//       where: {
//         id: userId
//       }
//     })
//     res.json(user)
//   } catch (err) {
//     next(err)
//   }
// })

//get USER
router.get('/',requireToken, async (req, res, next) => {
  try {
    const userId = req.user.id; // this returns the user from middleware
    const user = await User.findOne({
      where: {
        id: userId
      },
      include: Campaign
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})


// //get campaign(s) associated with User & User
// router.get('/campaigns',requireToken, async (req, res, next) => {
//   try{
//     const userId = req.user.id; 
//     const campaigns = await Campaign.findAll({
//       where: {
//         userId : userId
//       },
//       include: User
//     })
//     console.log("CAMPAIGNS", campaigns)
//     res.json(campaigns)
//   }catch(error){ 
//     next(error)
//   }
// })