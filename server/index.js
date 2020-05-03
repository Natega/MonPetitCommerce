const fs = require('fs')
// @TODO refacto c'est le bodel
const https = require('https')
const consola = require('consola')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
require('dotenv').config()
app.use(bodyParser.json())
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const { productRouter } = require('./router/product.js')
config.dev = process.env.NODE_ENV !== 'production'
mongoose.connect(
  `mongodb://${process.env.mongo_user}:${process.env.mongo_pwd}@localhost:${process.env.mongo_port}/printwhatyoulove`,
  { useNewUrlParser: true }
)

// app.use(require('serve-static')(__dirname + '/../../public'));
app.use(express.static('static'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(
  require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  })
)
app.use(passport.initialize())
app.use(passport.session())
const auth = require('./router/auth.js')
app.use('/auth', auth)

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
  /* User.findById(id, function (err, user) {
    done(err, user);
  }); */
})

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_URL,
      profileFields: ['id', 'displayName', 'name', 'gender', 'photos', 'email'],
      enableProof: true
    },
    function(accessToken, refreshToken, profile, cb) {
      const { User } = require('./schema/schema')
      const myUser = mongoose.model('user', User)
      myUser.findOne(
        {
          id: profile.id
        },
        function(err, user) {
          if (err) {
            return cb(err)
          }

          // No user was found... so create a new user with values from Facebook (all the profile. stuff)
          if (!user) {
            user = new myUser({
              id: profile.id,
              name: profile.displayName,
              provider: 'facebook'
            })
            user.save(function(err) {
              if (err) console.log(err)
              return cb(err, user)
            })
          } else {
            // found user. Return
            return cb(err, user)
          }
        }
      )
    }
  )
)

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  const server = https.createServer(options, app).listen(port)
  // Listen the server

  consola.ready({
    message: `Server listening on https://${host}:${port}`,
    badge: true
  })
}
const options = {
  cert: fs.readFileSync('server.cert'),
  key: fs.readFileSync('server.key')
}

start()

productRouter(app)

app.get('/login', (req, res, next) => {})

app.post('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/')
})

app.get('/auth/facebook', passport.authenticate('facebook'))

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/')
  }
)
/*
app.post('/uploadfile', (req, res, next) => {
  const file = req
  var base64Data = req.body.image.replace(/^data:image\/octet-stream;base64,/, "");

  require("fs").writeFile("./static/test.jpg", base64Data, 'base64', function (err) {
    console.log(err);
  });
  res.send(file.body)

}) */
