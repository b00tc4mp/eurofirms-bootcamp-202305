const { User } = require('../data')
const { validateText, validateId } = require('./helpers/validators')

function updateProfileBio(userId, text){
    validateId(userId)
    validateText(text)

    return User.findById(userId)
            .then(user => {
                if(!user) throw new Error('user not found')
                            
            user.bio = text

            return user.save()
            })
        .then(() => { })
}
module.exports = updateProfileBio