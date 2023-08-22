debugger
require('dotenv').config()

const retrieveChat = require('./retrieveChat')
const mongoose = require('mongoose')

const { MONGODB_URL } = process.env

const { User } = require('../../data/models')
const { Chat } = require('../../data/models')
const { expect } = require('chai')

describe('retrieveChat', () => {
    before(() => mongoose.connect(`${MONGODB_URL}/instaflan-test`))

    let name
    let email
    let password
    let userId

    let name2
    let email2
    let password2
    let userId2

    let chatId

    beforeEach(() => {
        name = `name-${Math.random()}`
        email = `user-${Math.random()}@gmail.com`
        password = `pass-${Math.random()}`

        name2 = `name-${Math.random()}`
        email2 = `user-${Math.random()}@gmail.com`
        password2 = `pass-${Math.random()}`

        return Promise.all([User.create({ name, email, password }),
        User.create({ name: name2, email: email2, password: password2 })])
            .then(([user, user2]) => {
                userId = user.id
                userId2 = user2.id

                const date = new Date()
                const messages = []
                const users = [user._id, user2._id]

                return Chat.create({ users, messages, date })
            })
            .then(chat => {
                chatId = chat.id
            })
    })

    it('retrieve chats correct', () =>
        retrieveChat(userId, chatId)
            .then(chat => {
                expect(chat.id).to.be.equal(chatId)
            })
    )

    it('fail for chat not found', () =>
        retrieveChat(userId, '123456123456123456123456')
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('chat not found')
            })
    )

    it('fail for user not found', () =>
        retrieveChat('123456123456123456123456', chatId)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('user not found')
            })
    )

    after(() => mongoose.disconnect())
})