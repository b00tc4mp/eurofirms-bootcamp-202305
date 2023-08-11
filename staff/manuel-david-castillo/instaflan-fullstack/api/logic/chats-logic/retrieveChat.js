const { Chat, User } = require("../../data/models");
const { validateId } = require("../helpers/validators");

function retrieveChat(userId, chatId) {
    validateId(userId)
    validateId(chatId)

    return Promise.all([Chat.findById(chatId, '-__v'), User.findById(userId, '-__v').lean()])
    .then(([chat, user]) => {
        if(!chat) throw new Error('empty chats')
        if(!user) throw new Error('user not found')

        if(!chat.unreadFor) chat.unreadFor = []
        const index = chat.unreadFor.findIndex(userId => userId.toString() === user._id.toString()) 
        if(index > -1) {
            chat.unreadFor.splice(index, 1)
        }

        return chat.save()
    })
    .then(()=> {
        return Chat.findById(chatId, '-__v')
        .populate('users', 'name image').sort({date: -1}).lean()
    })
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