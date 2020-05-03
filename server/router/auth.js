const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile', 'user_posts']
  }),
  function(req, res) {}
)
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/', session: true }),
  function(req, res) {
    res.redirect('/cart')
  }
)

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
)
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: true }),

  function(req, res) {
    // login

    if (req.session.returnTo) {
      const move = req.session.returnTo.replace('userid', req.user.id)
      req.session.returnTo = '/'
      res.redirect(move)
    } else {
      res.redirect('/')
    }
  }
)

module.exports = router
