const { validateId } = require("../helpers/validators");
const {Chat} = require("../../data/models")

function numberChatsNotReading(userId) {
    validateId(userId) 

    return Chat.find({users: userId}, 'unreadFor').lean()
    .then((chats) => {
        if(!chats) throw new Error('chats not found')

        let count = 0

        
        chats.forEach(chat => {
            if(chat.unreadFor) {
                 chat.unreadFor.forEach(id => {
                if(id.toString() === userId) count++
            })
            }
        });

        return count
    })
}

module.exports = numberChatsNotReading