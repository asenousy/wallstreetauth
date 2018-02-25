const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const cheerio = require('cheerio')

let $

When('I visit home page', function(done) {
  this.request('/homepage').then((response) => {
    $ = cheerio.load(response)
      done()
  })
})

Then('I should see nav bar', function() {
    expect($('nav').length).to.equal(1)
})

Then('I should see a wallstreel login button', function() {
    expect($('#login').text()).to.equal('Log using Wallstreet Account')
})
