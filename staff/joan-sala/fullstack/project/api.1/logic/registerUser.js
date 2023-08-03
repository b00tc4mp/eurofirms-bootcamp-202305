const { validateName, validateEmail, validatePassword, validateUrl } = require('./helpers/validators')
const { User } =  require('../data')


function registerUser(name, email, password, image){
    validateName(name)
    validateEmail(email)
    validatePassword(password)
    validateUrl(image)

    return User.findOne({ email })
        .then(user => {
            if(user) throw new Error('User already exist')

            return User.create ({name, email, password, image})
        })
        .then(() => {})
}
module.exports = registerUser