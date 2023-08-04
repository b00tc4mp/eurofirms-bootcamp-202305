const { User } = require('../data')
const { validateName, validateNickname,  validateEmail, validatePhone, validatePassword } = require('./helpers/validators')

function registerUser(name, nickname, email, phone, password) {
    validateName(name)
    validateNickname(nickname)
    validateEmail(email)
    validatePhone(phone)
    validatePassword(password)

    return User.findOne({ $or: [
        {email},
         {phone}, 
         {nickname}
     ]})
        .then(user => {
            if (user){
                if(user.email === email) throw new Error('User already exists')
                else if(user.nickname === nickname) throw new Error('Nickname already exists')
                else if(user.phone === phone) throw new Error('Phone already exists')
            }

            return User.create({ name, nickname, email, phone, password })
        })
        .then(() => { })
}
module.exports = registerUser