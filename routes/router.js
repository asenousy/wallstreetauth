var express = require('express');
var router = express.Router();
// var passport = require('passport')

router.get('/', function(req, res, next) {
  res.render('index', {user: req.user})
})

router.get('/user', function(req, res, next) {
  res.render('user');
})



// router.get('/auth/provider', passport.authenticate('provider'))

// router.get('/auth/provider/callback',
//   passport.authenticate('provider', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   }))


module.exports = router;
