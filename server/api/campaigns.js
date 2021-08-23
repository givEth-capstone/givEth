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

//get routes for specific tags