const { User, Test, Answer } = require('../data/index')
const { validateId,validateNumber,validateText} = require('./helpers/validators')
function updateAnswerScore(userId, studentId, answerId, testId, score,assessment) {
    validateId(userId)
    validateId(studentId)
    validateId(answerId)
    validateId(testId)
    validateNumber(score)
    validateText(assessment)

    return Promise.all([User.findById(userId), User.findById(studentId), Answer.findById(answerId), Test.findById(testId)])
        .then(([user, student, answer, test]) => {
            if (!user) throw new Error('User not found')
            if (!student) throw new Error('Student not found')
            if (!answer) throw new Error('answer not found')

            if (user.role !== 'teacher') throw new Error('this user is not a teacher')
            if (answer.student.toString() !== studentId) throw new Error('answer does not belong to student')
            if(answer.test.toString() !== testId) throw new Error('answer does not belong to this test')
            if(test.teacher.toString() !== userId) throw new Error ('test does not belong to teacher')

            //asignar los valores en answer
            answer.assessment = assessment
            answer.score = score
            answer.assessmentDate = new Date()

            return answer.save()
    })
    .then(()=> { })
}
module.exports = updateAnswerScore