const router = require('express').Router()
const fetch = require('node-fetch')
const getEmail = require('../helpers/getEmail')

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/homepage?pleaselogin=true')
    } else {
        next()
    }
}

router.get('/', authCheck, (req, res) => {
    fetch(`${process.env.WSD_DOMAIN}/oauth/userinfo`, { headers: { Authorization: `Bearer ${req.user}` } })
        .then(res => res.json())
        .then(user => {
            res.render('userprofile', {
                loggedIn: true,
                user: {
                    fullName: user.display_name || 'no name stored',
                    userName: user.username || 'no name stored',
                    email: getEmail(user.emails),
                    organisation: user.organisation.name || 'no organistion stored'
                }
            })
        })
        .catch(err => res.redirect('/homepage?loginfailed=true'))
})

router.get('/myid', authCheck, (req, res) => {
    fetch(`${process.env.WSD_DOMAIN}/oauth/userinfo`, { headers: { Authorization: `Bearer ${req.user}` } })
        .then(res => res.json())
        .then(user => {
            res.json(user.id)
        })
        .catch(err => res.redirect('/homepage?pleaselogin=true'))
})

module.exports = router
