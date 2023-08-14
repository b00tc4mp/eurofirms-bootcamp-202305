const { User, Test } = require('../data')
const { validateId } = require('./helpers/validators')

function retrieveTest(userId, testId) {
    validateId(userId)
    validateId(testId)

    return Promise.all([User.findById(userId).lean(), Test.findById(testId, '-__v').lean()])
        .then(([user, test]) => {
            if (!user) throw new Error('user not found')
            if (!test) throw new Error('test not found')

            if (test.teacher.toString() !== userId) throw new Error('test does not belong to user')

            delete test._id
            delete test.teacher
           
            return test
        })
}

module.exports = retrieveTest