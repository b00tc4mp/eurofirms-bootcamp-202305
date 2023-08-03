const {User ,Chat} = require('../../data/models')
const { validateId, validateText } = require('../helpers/validators')
const { ObjectId } = require('mongodb')

function sendMessageAndCreateChat(userId, othersUsers, text) {
    validateId(userId)
    validateText(text)

    othersUsers.forEach(user => {
            validateId(user)
        })

    const users = [new ObjectId(userId)]
    othersUsers.forEach(userId => users.push(new ObjectId(userId)))

    return Promise.all([Chat.findOne({users: users}, '-__v'),
    User.findById(userId, '-__v').lean()])
        .then(([chat, user]) => {
            if (!user) throw new Error ('user not found')

            const message = {
                author: user._id,
                text: text,
                date: new Date()
            }

            if(chat) {
                chat.messages.push(message)

                return chat.save()
            } else {
                const date = new Date()

                const messages = [message]

            return Chat.create({users, messages, date})
            }
        })
        .then(() => { })
        };

module.exports = sendMessageAndCreateChat