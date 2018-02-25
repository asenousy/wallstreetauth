const expect = require("chai").expect
const getEmail = require("../../helpers/getEmail")

describe("getting email", function () {
    it("should get default email if exist", function () {
        const emails = [{
            type: 'work',
            value: 'work@work.com'
        },
        {
            type: 'default',
            value: 'default@default.com'
        }]
        const email = getEmail(emails)
        expect(email).to.equal("default@default.com")
    })

    it("should get first email available if no default", function () {
        const emails = [{
            type: 'work',
            value: 'work@work.com'
        },
        {
            type: 'home',
            value: 'home@home.com'
        }]
        const email = getEmail(emails)
        expect(email).to.equal("work@work.com")
    })

    it("should return no emails stored message if list is empty", function () {
        const email = getEmail([])
        expect(email).to.equal("no emails stored")
    })
})
