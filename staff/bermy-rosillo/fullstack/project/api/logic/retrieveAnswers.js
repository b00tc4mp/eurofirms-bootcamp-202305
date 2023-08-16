const {User,Answer,Test} = require('../data')
const {validateId} = require('./helpers/validators')
function retrieveAnswers(userId,studentId,testId){
//TODO validate inputs parameters
//tODO verify user exists 
//TODO Verify test exitsç
//TODO retrieve answers of a student for the test
//TODO SANITAZE
validateId(userId)
validateId(studentId)
validateId(testId)

return Promise.all([User.findById(userId), User.findById(studentId), Test.findById(testId)])
.then(([user,student, test]) => {
    if (!user) throw new Error('user not found')
    if (!test) throw new Error('test not found')
    if(!student) throw new Error('Student not found')

    if (test.teacher.toString() !== userId) throw new Error('test do not belong to user')
    if (user.role !== 'teacher') throw new Error('User is not a teacher')


    return Answer.find({ test: testId, student: studentId },'-__v').populate('student','name','description').lean()
        .then(answers => {
            
            answers.forEach(answer=>{
               
                //sanitize
                answer.id = answer._id.toString() 
                delete answer._id

                if(answer.student._id){
               
                answer.student.id = answer.student._id.toString()
                delete answer.student._id
                }
                
                answer.test = answer.test.toString()

            })

            return answers
        })
})
}
module.exports = retrieveAnswers