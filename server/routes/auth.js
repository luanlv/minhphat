let express    = require('express')
let router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
var passport = require("passport")
var FacebookStrategy = require("passport-facebook").Strategy
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
var LocalStrategy = require('passport-local').Strategy
import bodyParser from 'body-parser'
let jsonParser = bodyParser.json()
import Mailer from '../services/mailgun'

passport.use(new LocalStrategy(
  function(username, password, done){
    console.log("strategy function starting...");
    User.getUserByEmail(username, function(err, user){
      if (err) throw err;
      if (user.length < 1){
        console.log("strategy calling done 1");
        return done(null, false, {message: "Unknown user"});
      }
      User.comparePassword(password, user[0].password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          console.log("strategy calling done 2");
          return done(null, user[0]);
        } else {
          console.log("strategy calling done 3");
          return done(null, false, {message: "Invalid password"});
        }
      });
    });
  }
))

passport.use(new FacebookStrategy({
    clientID:'386911785028195',
    clientSecret:'a6bb364bfff3a80ccb7e8901c6cee32b',
    callbackURL:'http://localhost:3000/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'emails', 'name']
  }, function(accessToken, refreshToken, profile, cb) {

  User.findOrCreate({username: profile.emails[0].value},
      {
        uid: profile.id,
        name: profile.displayName,
        username: profile.emails[0].value,
        provider: 'facebook',
        accessToken: accessToken,
        mustConfirmEmail: false,
        password: '',
        role: [
          'student'
        ]
      },
      function(err, user){
        cb(null, user)
      })
  }
))

passport.use(new GoogleStrategy({
    clientID: '181209932345-e5onckmk63rbchst6djlq9tjshbkmr79.apps.googleusercontent.com',
    clientSecret: 'a6Nz9Od7WfL82VdnFwpxLvKq',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(' Google stragety ')
    User.findOrCreate({username: profile.emails[0].value},
      {
        uid: profile.id,
        name: profile.displayName,
        username: profile.emails[0].value,
        provider: 'google',
        accessToken: accessToken,
        password: '',
        mustConfirmEmail: false,
        role: [
          'student'
        ]
      },
      function(err, user){
        console.log(user)
        cb(null, user)
      })
  }
))

passport.serializeUser(function(user, done){
  done(null, user)
})

passport.deserializeUser(function(user,done){
  done(null, user)
})

router.post('/signup', (req, res) => {
  User.getUserByEmail(req.body.username, function(err, user) {
    if (err) throw err
    if (user.length > 0)
      res.json({status: false, m: "Email đã được đăng ký"})
    else
      User.createUser(req.body, (err, user) => {
        if (err) throw err
        console.log(user)
      })
  })
})


router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}))

router.get('/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/'}),
  function (req, res) {
    res.redirect('/')
  })

router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }))

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/')
  })

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local', { successRedirect: '/auth/login/ok',
  failureRedirect: '/auth/login/false' }))



router.get('/login/ok', function(req, res, next) {
  // Mailer.sendRegister('luanlv2591@gmail.com', 'Luan')
  res.send(true)
});

router.get('/login/false', function(req, res, next) {
  res.send(false)
});

module.exports = router
