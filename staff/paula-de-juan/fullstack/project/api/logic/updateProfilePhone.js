const { User } = require('../data')
const { validatePhone, validateId } = require('./helpers/validators')

function updateProfilePhone(userId, phone){
    validateId(userId)
    validatePhone(phone)

    return User.findById(userId)
            .then(user => {
                if(!user) throw new Error('user not found')
                            
            user.phone = phone

            return user.save()
            })
        .then(() => { })
}
module.exports = updateProfilePhone