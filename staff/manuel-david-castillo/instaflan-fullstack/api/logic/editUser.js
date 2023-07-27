const {User} = require('../data/models')
const { validateId, validateName, validateUrl, validateText } = require('./helpers/validators')

function editUser(userId, name, image, description) {
    validateId(userId)
    validateName(name)
    validateUrl(image)
    validateText(description)

    return User.findById(userId)
    .then(user => {
        if(!user) throw new Error ('user not found')

        user.name = name
        user.image = image
        user.description = description

        return user.save()
    })
    .then(()=>{ })
}

module.exports = editUser