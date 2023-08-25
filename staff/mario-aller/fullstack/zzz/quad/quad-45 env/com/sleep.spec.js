const sleep = require('./sleep')
const { expect } = require('chai')

describe('sleep', () => {
    it('succeeds on sleep', () => {
        const start = new Date()
        sleep(150)
        const end = new Date()
        expect (end-start).to.above(150)
})
})