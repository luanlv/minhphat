import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Category = mongoose.model('Category')

router.get('/get', (req, res) => {
  let lang = req.query.lang ? req.query.lang : 'vi'
  Category.find({lang: lang}, (err, categories) => {
    if(err) res.sendStatus(400)
    res.send(categories)
  })
})


router.post('/', bodyParser.json() ,(req, res) => {
  Category.create(req.body, (err, category) => {
    if(err) res.sendStatus(400)
    res.send(category)
  })
})

router.get('/:slug', (req, res) => {
  Category.findOne({slug: req.params.slug}, (err, category) => {
    if(err) throw err
    res.send(category)
  })
})

router.post('/:slug', bodyParser.json(), (req, res) => {
  Category.update({slug: req.params.slug}, req.body, (err, respond) =>{
    if(err) throw err
    res.send(respond)
  })
})

router.delete('/delete/:slug', (req, res) => {
  Category.remove({slug: req.params.slug}, (err, respond) => {
    if(err) res.sendStatus(400)
    res.send(respond)
  })
})

module.exports = router