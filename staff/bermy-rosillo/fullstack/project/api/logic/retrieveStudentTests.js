const { User, Test, Answer } = require('../data/index')
const { validateId } = require('./helpers/validators')

function retrieveStudentTests(userId, testId, answerId) {
    validateId(userId)
    validateId(testId)
    validateId(answerId)

    return Promise.all([User.findById(userId), Test.findById(testId), Answer.findById(answerId)])
        .then(([user, test, answer]) => {
            if (!user) throw new Error('user not found')
            if (!test) throw new Error('test not found')
            if (!answer) throw new Error('answer not found')
            //si la respuesta no es del estudiante 
            if (answer.student.toString() !== userId) throw new Error('answer does not belong to student')

            return Answer.find({ test: testId, student: userId }).populate('test', 'subject title')
                .then(answers => {
                    const result = []
                    answers.forEach(item => {

                       const answer = {
                        id: item._id.toString(),
                        student: item.student.toString(),
                        test: {
                            id: item.test._id.toString(),
                            subject: item.test.subject,
                            title: item.test.title
                        }
                       }

                       result.push(answer)

                        //     item.id = item._id.toString()
                        //     delete item._id
                        
                        //     item.student = item.student.toString()

                        // if(item.test._id) {
                        //     item.test.id = item.test._id.toString()
                        //     delete item.test._id
                        // }

                        /* if(answer.test._id){
                            answer.test = answer.test._id.toString()
                            delete answer.test._id

                        }  */
                    })
                    return result
                })
        })
}
module.exports = retrieveStudentTests