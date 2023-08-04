const { User } = require('../data')
const { validateUrl, validateId } = require('./helpers/validators')

function updateProfileBio(userId, validateUrl){
    validateId(userId)
    validateUrl(Image )

    return User.findById(userId)
            .then(user => {
                if(!user) throw new Error('user not found')
                            
            user.bio = text

            return user.save()
            })
        .then(() => { })
}
module.exports = updateProfileBio