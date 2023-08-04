const { User } = require('../data')
const { validateEmail, validateId } = require('./helpers/validators')

function updateProfileEmail(userId, email){
    validateId(userId)
    validateEmail(email)

    return User.findById(userId)
            .then(user => {
                if(!user) throw new Error('user not found')
                            
            user.email = email

            return user.save()
            })
        .then(() => { })
}
module.exports = updateProfileEmail