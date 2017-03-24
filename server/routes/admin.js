import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')
let axios = require('axios')
let map = require('./mapUrl').default
import fakeDB from '../fakeDB.js'
const mongoose = require('mongoose')
const User = mongoose.model('User')
var proxy = require('express-http-proxy');
const path = require('path')

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../../public/admin') });
})


module.exports = router

