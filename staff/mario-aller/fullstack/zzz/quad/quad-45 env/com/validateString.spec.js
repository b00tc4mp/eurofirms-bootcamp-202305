const validateString = require('./validateString')
const { expect } = require('chai')

describe('validateString', () => {

    let testString

    it('succeeds on regular string correct', () => {
        testString = 'hello'
        validateString(testString, validateString.REGULAR)
    })
    it('succeeds on email correct', () => {
        testString = 'hello@mail.com'
        validateString(testString, validateString.EMAIL)
    })
    it('succeeds on password correct', () => {
        testString = 'hello'
        validateString(testString, validateString.PASSWORD)
    })
    it('succeeds on URL correct', () => {
        testString = 'http//localhost'
        validateString(testString, validateString.URL)
    })
    it('succeeds on name correct', () => {
        testString = 'John'
        validateString(testString, validateString.NAME)
    })
    it('succeeds on integer correct', () => {
        testString = '1234'
        validateString(testString, validateString.INTEGER)
    })
    it('succeeds on no option', () => {
        testString = '1234'
        validateString(testString)
    })

    it('fails on invalid char', () => {
        try {
            testString = 'hello@mail.com@'
            validateString(testString, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('char @ not valid')
        }
    })
    it('fails on no string', () => {
        try {
            testString = 'hello@mail.com@'
            validateString(23, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('param is not a string')
        }
    })
    it('fails on empty string', () => {
        try {
            testString = ''
            validateString(testString, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('the string is empty')
        }
    })
    it('fails on email without @', () => {
        try {
            testString = 'hellomail.com'
            validateString(testString, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('email with no @')
        }
    })
    it('fails on email with @ at starting', () => {
        try {
            testString = '@hellomail.com'
            validateString(testString, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('email with @ at the beginning')
        }
    })
    it('fails on email with @ at ending', () => {
        try {
            testString = 'hellomail.com@'
            validateString(testString, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('email with @ at the end')
        }
    })
    it('fails on email without .', () => {
        try {
            testString = 'hello@mailcom'
            validateString(testString, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('email without .')
        }
    })
    it('fails on email with @ and . wrong', () => {
        try {
            testString = 'hello.mail@com'
            validateString(testString, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('@ and . wrong placed')
        }
    })
    it('fails on email with . at starting', () => {
        try {
            testString = '.hello@mailcom'
            validateString(testString, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('email with . at the beginning')
        }
    })
    it('fails on email with . at ending', () => {
        try {
            testString = 'hello@mail.com.'
            validateString(testString, validateString.EMAIL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('email with . at the end')
        }
    })
    it('fails on password <3', () => {
        try {
            testString = 'he'
            validateString(testString, validateString.PASSWORD)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('the password has to be 3 o more chars length')
        }
    })
    it('fails on URL', () => {
        try {
            testString = 'htpp://'
            validateString(testString, validateString.URL)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('address do not begin with http')
        }
    })
    it('fails on number too big', () => {
        try {
            testString = '1234567890123456789'
            validateString(testString, validateString.INTEGER)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('number too big')
        }
    })
    it('fails on invalid option', () => {
        try {
            testString = '1234567890123456789'
            validateString(testString, -1)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('option not defined')
        }
    })
})