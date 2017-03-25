import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Service = mongoose.model('Service')

router.get('/get', (req, res) => {
  let query = req.query.lang ? {lang: req.query.lang} : {}
  Service.find(query, (err, services) => {
    if(err) res.sendStatus(400)
    res.send(services)
  })
})

router.get('/get/:slug', (req, res) => {
  Service.find({slug: req.params.slug}, (err, services) => {
    if(err || services.length < 1) res.sendStatus(400)
    res.send(services[0])
  })
})

router.get('/getInfo', (req, res) => {
  let query = req.query.lang ? {lang: req.query.lang} : {}
  Service.find(query)
    .select({ "slug": 1, "title": 1, "description": 1, "cover": 1})
    .exec((err, services) => {
      if(err) res.sendStatus(400)
      res.send(services)
    })
})



router.post('/', bodyParser.json() ,(req, res) => {
  Service.create(req.body, (err, service) => {
    if(err) res.sendStatus(400)
    res.send(service)
  })
})

router.get('/:slug', (req, res) => {
  Service.findOne({slug: req.params.slug}, (err, service) => {
    if(err) throw err
    res.send(service)
  })
})

router.post('/:slug', bodyParser.json(), (req, res) => {
  Service.update({slug: req.params.slug}, req.body, (err, respond) =>{
    if(err) throw err
    res.send(respond)
  })
})

router.delete('/delete/:slug', (req, res) => {
  Service.remove({slug: req.params.slug}, (err, respond) => {
    if(err) res.sendStatus(400)
    res.send(respond)
  })
})

module.exports = router