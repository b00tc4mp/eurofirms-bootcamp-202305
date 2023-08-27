const { User, Test, Answer } = require('../data/index')
const { validateId } = require('./helpers/validators')


function attempsCount(userId, testId) {
    validateId(userId)
    validateId(testId)

    return Promise.all([User.findById(userId), Test.findById(testId), Answer.find({ test: testId, student: userId }).count()])
        .then(([user, test, nroAttemps]) => {
            if (!user) throw new Error('user not found')
            if (!test) throw new Error('test not found')

            if (nroAttemps < test.attemps) 
                return true
            else
                return false
        })
}
module.exports = attempsCount