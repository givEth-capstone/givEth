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

router.get('/:tag', async (req, res, next) => {
  try {
    const campaigns = await Campaign.findAll({
      where: {
        tag: tag
      }
    })
    res.json(campaigns)
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