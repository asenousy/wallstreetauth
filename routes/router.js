const express = require('express')
const router = express.Router()
const passport = require('passport')

const isLoggedIn = (req, res, next) => {
  if (req.query.code) {
    next()
  } else {
    res.redirect('/homepage')
  }
}

router.get('/',
  isLoggedIn,
  passport.authenticate('provider', {
    successRedirect: '/profile',
    failureRedirect: '/homepage'
  }))

router.get('/homepage', (req, res) => {
  res.render('homepage', {
    loggedIn: req.user ? true : false,
    pleaseLogin: req.query.pleaselogin
  })
})

module.exports = router
