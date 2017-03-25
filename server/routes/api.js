import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')
let axios = require('axios')
let map = require('./mapUrl').default
import fakeDB from '../fakeDB.js'
const mongoose = require('mongoose')
const User = mongoose.model('User')

// Sub api
let image = require('./api/image')
let service = require('./api/service')
let product = require('./api/product')
let category = require('./api/category')
let post = require('./api/post')

router.post('/get', bodyParser.json() ,(req, res) => {
  let lang = req.query.lang ? req.query.lang : 'vi'
  if(!req.body) res.sendStatus(400)
  // console.log('request /get')
  // console.log(req.body)
  let listData = req.body
  axios.all(asyncAxios(listData, lang))
    .then(axios.spread((...args) => {
      // console.log('respond /get')
      // console.log(args)
      res.send(args)
    }))
});

router.use('/image', image)
router.use('/service', service)
router.use('/product', product)
router.use('/category', category)
router.use('/post', post)

router.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json(fakeDB)
  }, 300)
})

router.get('/:slug', (req, res) => {
  const index = fakeDB.findIndex(el => el.slug === req.params.slug)
  if (index < 0) {
    res.status(404).json({
      error: 'Post does not exist in db'
    })
  }

  setTimeout(() => {
    res.status(200).json(fakeDB[index])
  }, 300)
})

module.exports = router


function asyncAxios(listData, lang){
  console.log(' async Axios !!')
  let result = []
  listData.forEach((el, index) => {
    let url
    if(el.t === 1){
      url = map[el.v].url
    } else {
      url = map[el.v].url + el.e
    }
    if (url) {
      url = url + '?lang=' + lang
      result.push(axios.get(url).then((res) => { return {
        ok: true, value: res.data, req: el
      }}).catch(() => { return {
        ok: false, value: [], req: el
      }}))
    }
  });
  return result
}