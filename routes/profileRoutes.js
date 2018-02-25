const router = require('express').Router()
const fetch = require('node-fetch')

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/homepage')
    } else {
        next()
    }
}

router.get('/', authCheck, (req, res) => {
    fetch('https://staging-auth.wallstreetdocs.com/oauth/userinfo', { headers: { Authorization: `Bearer ${req.user}` } })
        .then(res => res.json())
        .then(user => {
            res.render('userprofile', {
                loggedIn: true,
                user: {
                    fullName: user.display_name,
                    userName: user.username,
                    email: user.emails.find(email => email.type === 'default').value,
                    organisation: user.organisation.name
                }
            })
        })
        .catch(err => res.redirect('/homepage'))
})

module.exports = router
