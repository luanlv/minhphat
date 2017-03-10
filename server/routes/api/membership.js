import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Subscribe = mongoose.model('Subscribe')

router.get('/get', (req, res) => {
  Coupon.find({}, (err, Coupons) => {
    if(err) res.sendStatus(400)
    res.send(Coupons)
  })
})

router.post('/', bodyParser.json(), (req, res) => {
  Subscribe.create(req.body, (err, sub) => {
    if (err) res.sendStatus(400)
    res.send(sub)
  })
})


module.exports = router