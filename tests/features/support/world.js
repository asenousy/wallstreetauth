const { setWorldConstructor } = require('cucumber')
const app = require('../../../server')
const supertest = require('supertest')

class CustomWorld {

    request(endpoint) {
        return new Promise((resolve, reject) => {
            supertest(app)
                .get(endpoint)
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(res.text)
                })
        })
    }
}

setWorldConstructor(CustomWorld)
