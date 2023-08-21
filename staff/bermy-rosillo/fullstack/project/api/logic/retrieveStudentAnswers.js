const { User, Answer } = require('../data/index')
const { validateId } = require('./helpers/validators')

function retrieveStudentAnswers(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')
           
            return Answer.find({ student: userId, assessment: {$exists: true} },'-__v').populate('test', 'subject title').lean()
                .then(answers => {
                   
                    answers.forEach(item => {                        
                        item.id= item._id.toString()
                        delete item._id

                        item.student = item.student.toString()

                        if (item.test._id) {
                            item.test.id = item.test._id.toString()
                            delete item.test._id
                        }

                       /* const answer = {
                        id: item._id.toString(),
                        student: item.student.toString(),
                        test: {
                            id: item.test._id.toString(),
                            subject: item.test.subject,
                            title: item.test.title
                        } */
                       
                    })
                    return answers
                })
        })
}
module.exports = retrieveStudentAnswers