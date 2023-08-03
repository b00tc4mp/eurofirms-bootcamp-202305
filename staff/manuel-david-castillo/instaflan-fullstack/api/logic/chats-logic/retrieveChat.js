const { Chat } = require("../../data/models");
const { validateId } = require("../helpers/validators");

function retrieveChat(userId, chatId) {
    validateId(userId)

    return Chat.findById(chatId, '-__v')
    .populate('users', 'name image').sort({date: -1}).lean()
    .then(chat => {
        if(!chat) throw new Error('empty chats')

            chat.id = chat._id
            delete chat._id

            const index = chat.users.findIndex(user => user._id.toString() === userId)
            chat.users.splice(index, 1)

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
        

        return chat
    })
}

module.exports = retrieveChat