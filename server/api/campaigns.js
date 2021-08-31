const router = require('express').Router()
const { models: { Campaign, User }} = require('../db')
module.exports = router
const {requireToken} = require('./gateKeepingMiddleware');

router.get('/', async (req, res, next) => {
  try {
    const campaigns = await Campaign.findAll({
      where : {
        status:true
      }
    })
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
      // o: I would be more specific so as to what problem occured here...
      //  like couldn't find resource
      next({ message: "some problem occured", status: 404})
    }
  } catch (err) {
    next(err)
  }
})

//post route for individual campaign

// o: you don't need the create here... the POST indicates that this is a
//  resource you are intending to create
router.post('/create', requireToken, async (req, res, next) => {
  try {
    // o: either use destructuring or not at all since its only used once
    let user = req.user;
    const createCampaign = await Campaign.create(req.body)
    await user.addCampaign(createCampaign)
    res.status(201).send(createCampaign);
  } catch (error) {
    next(error)
  }
})

//put route for updating donation amount

router.put('/:id/success', async (req, res, next) => {
  try {
    const campaign = await Campaign.findByPk(req.params.id)
    console.log("this is type of req body", req.body)
    const updatedReceived = Number(campaign.received) + Number(req.body.receiveAmt)
    
    // o: remember to remove console.log statements 
    console.log(updatedReceived)
    await campaign.update({received: updatedReceived})
    console.log(campaign)

    // o: you may want to consider sending the data back to the frontend
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

//put route for toggling active campaign to inactive
router.put('/:id', async (req, res, next) => {
  try {
    console.log("this is type of req body", req.body)
    const campaign = await Campaign.findByPk(req.params.id)
    await campaign.update(req.body)
    console.log(campaign)

    // o: you may want to consider sending the data back to the frontend
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})