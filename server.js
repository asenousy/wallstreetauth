const express = require('express')
const path = require('path')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const router = require('./routes/router')
const authRoutes = require('./routes/authRoutes')
const profileRoutes = require('./routes/profileRoutes')
const passport = require('passport')

require('dotenv').config()
require('./config/setupPassport')

const app = express()
const port = process.env.PORT || 3000

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

hbs.registerPartials(__dirname + '/views/partials')

app.use('/', router)
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.use(function (req, res) {
  res.status(404)
  res.render('error', {
    message: 'oops',
    error: new Error('Not Found')
  })
})

if (require.main === module) {
  app.listen(port, () => console.log(`listening on port ${port}!`))
} else {
  module.exports = app
}
