import path from 'path'
import http from 'http'
import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import hpp from 'hpp'
import throng from 'throng'

import React from 'react'
import ReactDOM from 'react-dom/server'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { Provider } from 'react-redux'
import { trigger } from 'redial'
import { StyleSheetServer } from 'aphrodite'
import Helm from 'react-helmet' // because we are already using helmet
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import mongoose from 'mongoose'
const models = require('./models/index')

import cookieSession from 'cookie-session'
import passport from 'passport'

import DefaultServerConfig from './config'
import webpackConfig from '../tools/webpack.client.dev'
import { compileDev, startDev } from '../tools/dx'
import { configureStore } from '../common/store'
import reducer from '../common/createReducer'
import createRoutes from '../common/routes/root'
import { initialStateApp } from '../common/initialState'

export const createServer = (config) => {
  const __PROD__ = config.nodeEnv === 'production'
  const __TEST__ = config.nodeEnv === 'test'

  const app = express()
  let assets = null

  var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    next();
  }

  app.use(allowCrossDomain)

  app.use('/assets', express.static('public'))
  app.use('/assets', express.static('public/assets'))
  app.use('/image/get', express.static('_image'))
  app.use('/api', require('./routes/api'))
  app.use('/image', require('./routes/image'))
  app.use('/admin', require('./routes/admin'))
  app.disable('x-powered-by')
  app.use(bodyParser.json())
  // app.use(bodyParser.urlencoded({ extended: true }))

  app.use(cookieSession({
    name: 'session',
    keys: ['edu_anabim'],
    maxAge: 24 * 60 * 60 * 1000 * 7 // 7 days
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  iconsole.log(f (__PROD__ || __TEST__) {
    app.use(morgan('combined'))
    app.use(helmet())
    app.use(hpp())
    app.use(compression())
    if (__PROD__) {
      assets = require('../assets.json')
    }
  } else {
    app.use(morgan('dev'))
    const compiler = compileDev((webpack(webpackConfig)), config.port)
    app.use(webpackDevMiddleware(compiler, {
      quiet: true,
      watchOptions: {
        ignored: /node_modules/
      }
    }))
    app.use(webpackHotMiddleware(compiler, { log: console.log }))
  }
  app.use('/auth', require('./routes/auth'))

  app.get('*', (req, res) => {
    console.log(req.headers.host)
    console.log('request header')
    console.log(req.headers)
    if (__PROD__) {
      initialStateApp.sourceRequest = {
        protocol: req.headers['x-forwarded-proto'] || req.protocol,
        host: 'minhphatlogistics.com.vn'
      }
    } else {
      initialStateApp.sourceRequest = {
        protocol: req.headers['x-forwarded-proto'] || req.protocol,
        host: req.headers.host
      }
    }


    if(req.user){
      initialStateApp.user = getUserInfo(req.user)
    } else {
      initialStateApp.user = {}
    }
    const store = configureStore(initialStateApp)
    const routes = createRoutes(store)
    const history = createMemoryHistory(req.originalUrl)
    const { dispatch } = store

    match({ routes, history}, (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err)
        return res.status(500).send('Internal server error')
      }

      if (!renderProps) {
        return res.status(404).send('Not found')
      }

      const { components } = renderProps

      // Define locals to be provided to all lifecycle hooks:
      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,

        // Allow lifecycle hooks to dispatch Redux actions:
        dispatch
      }

      trigger('fetch', components, locals)
        .then(() => {
          const initialState = store.getState()
          const InitialView = (
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          )

          // just call html = ReactDOM.renderToString(InitialView)
          // to if you don't want Aphrodite. Also change renderFullPage
          // accordingly
          const data = StyleSheetServer.renderStatic(
            () => ReactDOM.renderToString(InitialView)
          )
          const head = Helm.rewind()
          res.status(200).send(`
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charSet="utf-8">
                <meta httpEquiv="X-UA-Compatible" content="IE=edge">
                ${head.title.toString()}
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="shortcut icon" href="/favicon.ico">
                
                   <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">
                   
                  <!-- Required Framework -->
                  <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
              
                  <!-- Required Framework -->
                  <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />
                  <link rel="stylesheet" type="text/css" href="/assets/css/owl.transitions.css" />
                  <link rel="stylesheet" type="text/css" href="/assets/css/settings.css" />
              
                  <!-- Fonts Icons-->
                  <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />
                  <link rel="stylesheet" type="text/css" href="/assets/css/copious-icon.css" />
              
                  <!-- Navbar Css -->
                  <link rel="stylesheet" type="text/css" href="/assets/css/bootsnav.css" />
              
                  <!-- Custom Css -->
                  <link rel="stylesheet" type="text/css" href="/assets/css/color.css" />
                  <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

                
                ${head.meta.toString()}
                ${head.link.toString()}
                </style>
                <style data-aphrodite>${data.css.content}</style>
              </head>
              <body>
                <div id="root">${data.html}</div>
                <script>window.renderedClassNames = ${JSON.stringify(data.css.renderedClassNames)};</script>
                <script>window.INITIAL_STATE = ${JSON.stringify(initialState)};</script>
                
                <!--Required JS -->
    <script src="/assets/js/jquery.2.2.3.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>

    <!-- SMOOTH SCROLL -->  
    <script type="text/javascript" src="/assets/js/scroll-desktop.js"></script>
    <script type="text/javascript" src="/assets/js/scroll-desktop-smooth.js"></script>

    <script src="/assets/js/jquery.counterup.js"></script>
    <script src="/assets/js/themepunch/jquery.themepunch.revolution.min.js"></script>
    <script src="/assets/js/themepunch/jquery.themepunch.tools.min.js"></script>
    <script src="/assets/js/themepunch/revolution.extension.layeranimation.min.js"></script>
    <script src="/assets/js/themepunch/revolution.extension.navigation.min.js"></script>
    <script src="/assets/js/themepunch/revolution.extension.parallax.min.js"></script>
    <script src="/assets/js/themepunch/revolution.extension.slideanims.min.js"></script>
    <script src="/assets/js/themepunch/revolution.extension.video.min.js"></script>
    <script src="/assets/js/tab_slider.js"></script>
    <script src="/assets/js/owl.carousel.min.js"></script>
    <script src="/assets/js/bootsnav.js"></script>
    <script src="/assets/js/wow.min.js"></script>
    <script src="/assets/js/viedobox/video.js"></script>
    <script src="/assets/js/jquery.parallax-1.1.3.js"></script>
    <script src="/assets/js/bootstrap-number-input.js"></script>
    <script src="/assets/js/renge_selectbox-0.2.min.js"></script>
    <script src="/assets/js/range-Slider.min.js"></script>
    <script src="/assets/js/modernizr.js"></script>
    <script src="/assets/js/zelect.js"></script>
    <!-- Progress  -->
    <script src="/assets/js/progressbar.js"></script>
    <script src="/assets/js/copious_custom.js"></script>

                
                <script src="${ __PROD__ ? ('/assets' + assets.vendor.js) : '/vendor.js' }"></script>
                <script async src="${ __PROD__ ? ('/assets' + assets.main.js) : '/main.js' }" ></script>
              </body>
            </html>
          `)
        }).catch(e => console.log(e))
    })
  })


  const server = http.createServer(app)


  // Heroku dynos automatically timeout after 30s. Set our
  // own timeout here to force sockets to close before that.
  // https://devcenter.heroku.com/articles/request-timeout
  if (config.timeout) {
    server.setTimeout(config.timeout, (socket) => {
      const message = `Timeout of ${config.timeout}ms exceeded`

      socket.end([
        'HTTP/1.1 503 Service Unavailable',
        `Date: ${(new Date).toGMTString()}`,  // eslint-disable-line
        'Content-Type: text/plain',
        `Content-Length: ${message.length}`,
        'Connection: close',
        '',
        message
      ].join(`\r\n`))
    })
  }

  return server
}


export const startServer = (serverConfig) => {
  const config =  {...DefaultServerConfig, ...serverConfig}
  const server = createServer(config)
  server.listen(config.port, (err) => {
    if (config.nodeEnv === 'production' || config.nodeEnv === 'test') {
      if (err) console.log(err)
      console.log(`server ${config.id} listening on port ${config.port}`)
    } else {
      startDev(config.port, err)
    }
  })
}

function listen () {
  if (require.main === module) {
    throng({
      start: (id) => startServer({id}),
      workers: process.env.WEB_CONCURRENCY || 1,
      lifetime: Infinity
    })
  }
}
function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.Promise = require('bluebird');
  return mongoose.connect('mongodb://localhost/minhphat', options).connection;
}

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function getUserInfo (user) {
  return {
    username: user.username,
    name: user.name,
    info: user.info,
    emailConfirm: user.emailConfirm,
    member: user.member
  }
}

