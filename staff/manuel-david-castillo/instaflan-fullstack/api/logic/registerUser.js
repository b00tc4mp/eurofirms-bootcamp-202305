const {User} = require('../data/models')
const {validateName, validateEmail, validatePassword, validateUrl, validateText} = require('./helpers/validators')

function registerUser(name, image, description, email, password) {
    validateName(name)
    validateUrl(image)
    validateText(description) 
    validateEmail(email)
    validatePassword(password)

    return User.findOne({email})
    .then(user => {
        if (user) throw new Error('user already exists')

        const favPosts = []

        return User.create({name, image, description, email, password, favPosts})
    })
    .then(()=>{ })
}

module.exports = registerUser