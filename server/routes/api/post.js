import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Post = mongoose.model('Post')

router.get('/get', (req, res) => {
  let query = req.query.lang ? { lang: req.query.lang } : {}
  Post.aggregate([{
    $match: query
  }, {
    $lookup: {
      from: 'category',
      localField: 'category',
      foreignField: '_id',
      as: 'category'
    }
  }], (err, result) => {
    if (err) throw err
    res.send(result)
  })
})
router.get('/get2', (req, res) => {
  Post.aggregate([{
    $match: {}
  }, {
    $lookup: {
      from: 'category',
      localField: 'category',
      foreignField: '_id',
      as: 'category'
    }
  }], (err, result) => {
    if (err) throw err
    res.send(result)
  })
})

router.get('/getNewest', (req, res) => {
  let query = req.query.lang ? { lang: req.query.lang } : {}
  Post.aggregate([{
    $match: query
  }, {
    $sort: { createAt: -1 }
  }, {
    $limit: 5
  }, {
    $lookup: {
      from: 'category',
      localField: 'category',
      foreignField: '_id',
      as: 'category'
    }
  }, {
    $project: {
      _id: 0,
      content: 0
    }
  }], (err, result) => {
    if (err) throw err
    res.send(result)
  })
})

router.get('/getPost', (req, res) => {
  let query = req.query.lang ? { lang: req.query.lang } : {}
  Post.aggregate([{
    $match: query
  }, {
    $sort: { createAt: -1 }
  }, {
    $lookup: {
      from: 'category',
      localField: 'category',
      foreignField: '_id',
      as: 'category'
    }
  }, {
    $project: {
      _id: 0,
      content: 0
    }
  }], (err, result) => {
    if (err) throw err
    res.send(result)
  })
})


router.post('/', bodyParser.json(), (req, res) => {
  var data = req.body
  data.category = data.category.map((el) => el._id)
  console.log(data)
  Post.create(data, (err, post) => {
    if (err) res.sendStatus(400)
    res.send(post)
  })
})

router.get('/:slug', (req, res) => {
  Post.aggregate([{
    $match: { slug: req.params.slug }
  }, {
    $lookup: {
      from: 'category',
      localField: 'category',
      foreignField: '_id',
      as: 'category'
    }
  }], (err, result) => {
    if (err) throw err
    if (result.length < 1) res.sendStatus(400)
    res.send(result[0])
  })
})

router.post('/:slug', bodyParser.json(), (req, res) => {
  var data = req.body
  data.category = data.category.map((el) => el._id)
  console.log(data)
  Post.update({ slug: req.params.slug }, data, (err, respond) => {
    if (err) throw err
    res.send(respond)
  })
})

router.delete('/delete/:slug', (req, res) => {
  Post.remove({ slug: req.params.slug }, (err, respond) => {
    if (err) res.sendStatus(400)
    res.send(respond)
  })
})



module.exports = router
