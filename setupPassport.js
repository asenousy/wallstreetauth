const passport = require('passport')
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy

passport.serializeUser(function (token, done) {
    done(null, token)
})

passport.deserializeUser(function (token, done) {
    done(null, token)
})

passport.use('provider', new OAuth2Strategy({
    authorizationURL: `${process.env.WSD_DOMAIN}/oauth/authorize`,
    tokenURL: `${process.env.WSD_DOMAIN}/oauth/token`,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}`
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, accessToken)
    }
))
