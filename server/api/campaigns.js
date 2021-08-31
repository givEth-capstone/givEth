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
      next({ message: "some problem occured", status: 404})
    }
  } catch (err) {
    next(err)
  }
})

//post route for individual campaign

router.post('/create', requireToken, async (req, res, next) => {
  try {
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
    const updatedReceived = Number(campaign.received) + Number(req.body.receiveAmt)
    await campaign.update({received: updatedReceived})
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
    const updatedCampaign = await campaign.update(req.body)
    console.log(campaign)
    res.status(200).send(updatedCampaign)
  } catch (error) {
    next(error)
  }
})