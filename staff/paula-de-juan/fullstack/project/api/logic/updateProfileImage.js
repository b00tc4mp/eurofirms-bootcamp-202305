const { User } = require('../data')
const { validateUrl, validateId } = require('./helpers/validators')

function updateProfileImage(userId, url){
    validateId(userId)
    validateUrl(url)

    return User.findById(userId)
            .then(user => {
                if(!user) throw new Error('user not found')
                            
            user.image = url

            return user.save()
            })
        .then(() => { })
}
module.exports = updateProfileImage