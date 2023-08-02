const {Chat, Message} = require('../../data/models')
const { validateId } = require('../helpers/validators')

function createChatWithMessage(userId, othersUsers, text) {
    validateId(userId)

    othersUsers.forEach(userId => {
        validateId(userId)
    });
}