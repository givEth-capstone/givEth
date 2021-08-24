const router = require('express').Router()
const { models: { Campaign }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const campaigns = await Campaign.findAll()
    res.json(campaigns)
  } catch (err) {
    next(err)
  }
})

<<<<<<< HEAD
//get routes for specific tags
=======
//get routes for specific tags

//get route for individual 

//post route for individual campaign
>>>>>>> 09cfca4b1d4615ca5036f2b81f9eeb748abb3459
