var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', {user: req.user})
})

router.get('/user', function(req, res, next) {
  res.render('user')
})

module.exports = router
