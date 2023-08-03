const { Chat } = require("../../data/models");
const { validateId } = require("../helpers/validators");

function retrieveChats(userId) {
    validateId(userId)

    return Chat.find({users: userId}, '-__v')
    .populate('users', 'name image').sort({date: -1}).lean()
    .then(chats => {
        if(!chats) throw new Error('empty chats')

        chats.forEach(chat => {
            chat.id = chat._id
            delete chat._id

            chat.users.forEach(user =>{
                if(user._id) {
                    user.id = user._id
                delete user._id
                }
            })

            chat.messages.forEach(message => {
                if(message._id) {
                    message.id = message._id
                delete message._id
                }
            })
        })

        return chats
    })
}

module.exports = retrieveChats