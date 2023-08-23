const { User, Test, Answer } = require('../data/index')
const { validateId } = require('./helpers/validators')

function retrieveStudentListTests(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('User not found')

            return Answer.find({}, '-__v').populate('test','subject title').populate('student','-__v').lean()
                .then(answers => {
                    answers.forEach(answer => {
                        answer.id = answer._id.toString()
                        delete answer._id

                        if(answer.student._id) {
                            answer.student.id = answer.student._id.toString()
                            delete answer.student._id
                        }
                        if(answer.test._id) {
                            answer.test.id = answer.test._id.toString()
                            delete answer.test._id
                        }
                    })
                    return answers
                })
        })
}
module.exports = retrieveStudentListTests