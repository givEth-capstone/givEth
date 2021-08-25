const router = require('express').Router()
const { models: { Campaign, User }} = require('../db')
const {requireToken} = require('./gatekeepingMiddleware')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const campaigns = await Campaign.findAll()
    res.send(campaigns)
  } catch (err) {
    next(err)
  }
})



//get routes for specific tags

//get route for individual 
router.get('/:id', async (req, res, next) => {
  try {
    const campaign = await Campaign.findByPk(req.params.id)
    if(campaign) {
      res.json(campaign);
    } else {
      next({ message: "some problem occured", status: 404})
    }
  } catch (err) {
    next(err)
  }
})

//post route for individual campaign

router.post('/create', async (req, res, next) => {
  try {
    const campaign = await Campaign.create(req.body)
    res.json(campaign);
  } catch (error) {
    next(error)
  }
})



