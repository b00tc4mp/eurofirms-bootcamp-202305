debugger
/* Sin terminar, me está dando mucho por culo */
require('dotenv').config()

const mongoose = require('mongoose')
const deleteMessage = require('./deleteMessage')

const { Chat } = require('../../data/models')
const { expect } = require('chai')
const { beforeEach } = require('node:test')

const { MONGODB_URL } = process.env

describe('deleteMessage', () => {
    before(() => mongoose.connect(`${MONGODB_URL}/instaflan-test`))

    let name
    let email
    let password
    let userId

    let name2
    let email2
    let password2
    let userId2

    let message
    let text

    let messageId

    let chatId

    beforeEach(() => {
        name = `name-${Math.random()}`
        email = `user-${Math.random()}@gmail.com`
        password = `pass-${Math.random()}`

        name2 = `name-${Math.random()}`
        email2 = `user-${Math.random()}@gmail.com`
        password2 = `pass-${Math.random()}`

        text = `text-${Math.random()}`

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
            .then(chatId => {
                return Promise.all([Chat.findById(chatId, '-__v'),
                User.findById(userId, '-__v')])
            })
            .then(([chat, user]) => {
                const message = {
                    author: user._id,
                    text: text,
                    date: new Date()
                }

                chat.messages.push(message)

                return chat.save()
            })
            .then(() => {
                return Chat.findById(chatId, '-__v').lean()
            })
            .then(chat => {
                messageId = chat.messages[0]._id.toString()
            })
    })

    it('delete message correct', () =>
        deleteMessage(userId, messageId)
            .then(() => {
                return Chat.findOne({ "messages._id": messageId }, '-__v')
            })
            .then(chat => {
                expect(chat.messages.lenght).to.equal(0)
            })
    )


    after(() => mongoose.disconnect())
})