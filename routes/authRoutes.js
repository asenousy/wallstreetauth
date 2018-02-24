var express = require('express')
var router = express.Router()
const passport = require('passport')

router.get('/logout', function (req, res) {
    res.send('log out');
    // req.logout();
    // res.redirect('/');
})

router.get('/wallstreet', passport.authenticate('provider'))

module.exports = router