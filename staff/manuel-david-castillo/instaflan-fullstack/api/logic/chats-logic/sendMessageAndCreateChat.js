const {User ,Chat, Message} = require('../../data/models')
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

    return User.findById(userId).lean()
    .then((user) => {
        if (!user) throw new Error('user not found')

        const author = user._id
        const date = new Date()

        return Promise.all([Chat.findOne({users: users}, '-__v'), 
        Message.create({author, text, date})])
        .then(([chat, message]) => {
            if(!message) throw new Error('message not created')

            if(chat) {
                chat.messages.push(message._id)

                return chat.save()
            } else {
                const messages = [message._id]

                const date = new Date()

            return Chat.create({users, messages, date})
            }
        })
        .then(() => { })
        })
        
    };

module.exports = sendMessageAndCreateChat