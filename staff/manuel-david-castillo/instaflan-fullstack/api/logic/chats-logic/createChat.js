const { Chat } = require("../../data/models");
const { validateId } = require("../helpers/validators");
const { ObjectId } = require('mongodb')

function createChat(userId, othersUsers) {
    validateId(userId)

    othersUsers.forEach(user => {
        validateId(user)
    })

    const users = [new ObjectId(userId)]
    othersUsers.forEach(userId => users.push(new ObjectId(userId)))

    return Chat.findOne({users: users}, '-__v')
        .then(chat => {

            if(chat) {

                return chat.id
            } else {
                const date = new Date()

                const messages = []

                return Chat.create({users, messages, date})
                .then(chat => {
                    
                    return chat.id
                })
        }
    })
}

module.exports = createChat