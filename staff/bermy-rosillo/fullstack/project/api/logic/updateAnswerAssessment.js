const { User, Test, Answer } = require('../data/index')
const { validateId,validateNumber,validateText} = require('./helpers/validators')
function updateAnswerAssessment(userId, studentId,testId,answerId, score,assessment) {
    validateId(userId)
    validateId(studentId)
    validateId(testId)
    validateId(answerId)
    validateNumber(score)
    validateText(assessment)

    return Promise.all([User.findById(userId).lean(), User.findById(studentId).lean(), Answer.findById(answerId), Test.findById(testId).lean()])
        .then(([user, student, answer, test]) => {
            if (!user) throw new Error('user not found')
            if (!student) throw new Error('student not found')
            if(!test) throw new Error('test not found')
            if (!answer) throw new Error('answer not found')

            if (user.role !== 'teacher') throw new Error('user is not a teacher')
            if (answer.student.toString() !== studentId) throw new Error('answer does not belong to student')
            if(answer.test.toString() !== testId) throw new Error('answer does not belong to test')
            if(test.teacher.toString() !== userId) throw new Error ('test does not belong to teacher')

            //asignar los valores en answer
            answer.assessment = assessment
            answer.score = score
            answer.assessmentDate = new Date()

            return answer.save()
    })
    .then(()=> { })
}
module.exports = updateAnswerAssessment