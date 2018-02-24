const passport = require('passport')
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy

passport.serializeUser(function (token, done) {
    done(null, token)
})

passport.deserializeUser(function (token, done) {
    done(null, token)
})

passport.use('provider', new OAuth2Strategy({
    authorizationURL: 'https://staging-auth.wallstreetdocs.com/oauth/authorize',
    tokenURL: 'https://staging-auth.wallstreetdocs.com/oauth/token',
    clientID: 'coding_test',
    clientSecret: 'bwZm5XC6HTlr3fcdzRnD',
    callbackURL: 'http://localhost:3000'
},
    function (accessToken, refreshToken, profile, done) {
        console.log('accessToken = ', accessToken)
        console.log('profile = ', profile)
        return done(null, accessToken)
    }
))
