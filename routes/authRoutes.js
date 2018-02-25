const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/homepage')
})

router.get('/wallstreet', passport.authenticate('provider'))

module.exports = router
