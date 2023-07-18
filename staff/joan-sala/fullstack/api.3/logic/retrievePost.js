const { ObjectId } = require('mongodb')
const context = require('./context')
const { validateId } = require('./helpers/validators')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    const { users, posts } = context

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    //Búsqueda completa, devuelve una cadena de promesas. DOCUMENTO
    return Promise.all([users.findOne({ _id: userObjectId }),
    posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => { //DESTRUCTURAR    
            if (!user) throw new Error('User not found')
            if (!post) throw new Error('Post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')
            //detcta si el userId no es igual al string del autor del post

            delete post._id
            delete post.author
            delete post.date

            return post
        })
}
module.exports = retrievePost