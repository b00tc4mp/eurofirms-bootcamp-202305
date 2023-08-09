const { validateId, validateText } = require("../helpers/validators")
const { User, Post } = require("../../data/models")

function createComment(userId, postId, text) {
    validateId(userId)
    validateId(postId)
    validateText(text)

    return Promise.all([Post.findById(postId, '-__v'), 
        User.findById(userId, '-__v').lean()])
        .then(([post, user]) => {
            if (!post) throw new Error('post not found')
            if (!user) throw new Error('user not found')

            const comment = {
                author: user._id,
                text: text,
                date: new Date()
            }

            if (!post.comments) post.comments = []

            post.comments.push(comment)

            return post.save()
        })
        .then(()=>{ })
}

module.exports = createComment