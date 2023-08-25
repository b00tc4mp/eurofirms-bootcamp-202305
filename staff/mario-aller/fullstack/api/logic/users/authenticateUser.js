const { models: { UserModel } } = require('dat')
const { validateString } = require('com')

function authenticateUser(email, password) {
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return UserModel.findOne({ email }, 'password').lean()
        .then((user) => {
            if (!user) throw new Error('user does not exists')
            if (user.password !== password) throw new Error('wrong password')

            return user._id.toString()
        })
}

module.exports = authenticateUser