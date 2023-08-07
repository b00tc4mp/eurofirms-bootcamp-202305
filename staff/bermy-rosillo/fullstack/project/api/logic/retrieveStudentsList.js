const { User, Test, Answer } = require('../data/index')
const { validateId } = require('./helpers/validators')
function retrieveStudentsList(userId, testId) {
    validateId(userId)
    validateId(testId)

    return Promise.all([User.findById(userId), Test.findById(testId)])
        .then(([teacher, test]) => {
            if (!teacher) throw new Error('teacher not found')
            if (!test) throw new Error('test not found')
            if (test.teacher.toString() !== teacher.id) throw new Error('test dont belong to teacher')
            if (teacher.role !== 'teacher') throw new Error('user is not a teacher')


            return Answer.find({ test: testId }, 'student').populate('student', 'name').lean()
                .then(answers => {
                   const students =  answers.map(answer => {
                    answer.student.id = answer.student._id.toString()
                    delete answer.student._id

                    return answer.student
                })
                //TODO clean repetead students
                    return students
                })
        })
}
module.exports = retrieveStudentsList