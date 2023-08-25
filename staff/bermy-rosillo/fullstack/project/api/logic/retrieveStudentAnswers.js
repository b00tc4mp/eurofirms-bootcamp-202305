const { User, Answer } = require('../data/index')
const { validateId } = require('./helpers/validators')

function retrieveStudentAnswers(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            return Answer.find({ student: userId, assessment: { $exists: true } }, '-__v').populate('test','-__v').lean()
                .then(answers => {

                    answers.forEach(item => {
                        item.id = item._id.toString()
                        delete item._id

                        item.student = item.student.toString()

                        if (item.test._id) {
                            item.test.id = item.test._id.toString()
                            delete item.test._id
                        }
                    })
                    return answers
                })
        })
}
module.exports = retrieveStudentAnswers