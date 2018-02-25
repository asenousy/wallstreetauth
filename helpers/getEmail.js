module.exports = function(emails) {
    if (emails.length) {
        const email = emails.find(email => email.type === 'default') || emails[0]
        return email.value
    }
    return 'no emails stored'
}
