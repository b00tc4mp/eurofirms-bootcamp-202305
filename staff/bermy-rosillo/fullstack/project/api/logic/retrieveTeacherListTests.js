const { User, Test } = require('../data/index')
const { validateId } = require('./helpers/validators')

function retrieveTeacherListTest(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('User not found')

            return Test.find({}, '-__v').populate('teacher','subject').lean()
                .then(tests => {
                    tests.forEach(test => {
                        test.id = test._id.toString()
                        delete test._id

                        const{teacher} = test
                        if(teacher._id){
                            teacher.id = teacher._id.toString()
                            delete teacher._id
                        }

                    })
                    return tests
                })
        })
}
module.exports = retrieveTeacherListTest