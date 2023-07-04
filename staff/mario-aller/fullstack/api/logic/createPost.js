const ctx = require('./ctx')
const { ObjectId } = require('mongodb')
const { stringValid } = require('./helpers/validators')

function createPost(authorId, msg, img) {
    stringValid(authorId)
    stringValid(msg, ctx.STR_NAME)
    stringValid(img, ctx.STR_URL)

    return ctx.users.findOne({ _id: new ObjectId(authorId) })
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')

            return ctx.posts.insertOne({ author: user._id, text: msg, image: img })
        })
        .then(() => { })
}
module.exports = createPost