const{User,Test} = require('../data/index')
const {validateId, validateText} = require('./helpers/validators')

function createTest(subject,title,description,teacher,attemps){
    validateText(subject)
    validateText(title)
    validateText(description)
    validateId(teacher)
    validateText(attemps)

    return User.findById(teacher)
    .then(user=>{
        if(!user)
            throw new Error('User not found')
        //tODO VALIDATE ROLE
       return Test.create({subject,title,description,teacher,attemps})
    })
    .then(()=>{})
}
module.exports = createTest