var express = require('express');
var path = require('path');
const cookieSession = require('cookie-session')
var bodyParser = require('body-parser');
var hbs = require('hbs');
var router = require('./routes/router');
var authRoutes = require('./routes/authRoutes');
var profileRoutes = require('./routes/profileRoutes');
const passport = require('passport')
// var session = require('express-session')

var app = express();

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false, httpOnly: true }
// }))

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['cookiekey']
}))

require('./setupPassport')

app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

const loggedIn = (req, res, next) => {
  if (req.query.code) {
    console.log('code = ', req.query.code)
    next()
  } else {
    res.redirect('/homepage')
  }
}

app.get('/',
  loggedIn,
  passport.authenticate('provider', {
    successRedirect: '/profile',
    failureRedirect: '/homepage'
  }))

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.get('/homepage', (req, res) => {
  res.render('homepage', {
    loggedIn: req.user ? true : false
  })
})

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => console.log('listening on port 3000!'))
