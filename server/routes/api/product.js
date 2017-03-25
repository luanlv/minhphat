import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Product = mongoose.model('Product')

router.get('/get', (req, res) => {
  Product.find({}, (err, products) => {
    if(err) res.sendStatus(400)
    res.send(products)
  })
})

router.get('/get/:slug', (req, res) => {
  Product.find({slug: req.params.slug}, (err, products) => {
    if(err || products.length < 1) res.sendStatus(400)
    res.send(products[0])
  })
})

router.post('/', bodyParser.json() ,(req, res) => {
  Product.create(req.body, (err, product) => {
    if(err) res.sendStatus(400)
    res.send(product)
  })
})

router.get('/getInfo', (req, res) => {
  let query = req.query.lang ? {lang: req.query.lang} : {}
  Product.find(query)
    .select({ "slug": 1, "title": 1, "description": 1, "cover": 1})
    .exec((err, products) => {
      if(err) res.sendStatus(400)
      res.send(products)
    })
})

router.get('/:slug', (req, res) => {
  Product.findOne({slug: req.params.slug}, (err, product) => {
    if(err) throw err
    res.send(product)
  })
})

router.post('/:slug', bodyParser.json(), (req, res) => {
  Product.update({slug: req.params.slug}, req.body, (err, respond) =>{
    if(err) throw err
    res.send(respond)
  })
})

router.delete('/delete/:slug', (req, res) => {
  Product.remove({slug: req.params.slug}, (err, respond) => {
    if(err) res.sendStatus(400)
    res.send(respond)
  })
})

module.exports = router