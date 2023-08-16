const { User, Test, Answer } = require('../data/index')
const { validateId, validateText } = require('./helpers/validators')
const{Types:{ObjectId}} = require('mongoose')

function createAnswer(studentId, testId, answer) {
    validateId(studentId)
    validateId(testId)
    validateText(answer)

    return Promise.all([User.findById(studentId), Test.findById(testId)])
        .then(([student, test]) => {
            if (!student) throw new Error('Student not found')
            if (!test) throw new Error('test not found')

            //if (test.teacher.toString() !== studentId) throw new Error('test do not belong to user')
            //if (user.role !== 'teacher') throw new Error('User is not a teacher')

            return Answer.create({ student:new ObjectId(studentId), test:new ObjectId(testId), description:answer })
        })
        .then(() => { })
}
module.exports = createAnswer