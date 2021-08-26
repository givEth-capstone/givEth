const router = require('express').Router()
const { models: { Campaign, User }} = require('../db')
module.exports = router
const {requireToken} = require('./gateKeepingMiddleware');

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

router.post('/create', requireToken, async (req, res, next) => {
  console.log('Here is the req.body', req.body)
  try {
    const user = User.findByPk(req.body.userId);
    console.log('this is the user', user);
    console.log('this is the req.body', req.body);
    const createCampaign = await Campaign.create(req.body, user)
    console.log("this is the campaign", createCampaign);
    res.status(201).send(createCampaign);
  } catch (error) {
    next(error)
  }
})
