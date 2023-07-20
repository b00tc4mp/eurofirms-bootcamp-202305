const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')


function deletePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({ _id: userObjectId }), context.posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')
            if(userId !== post.author.toString()) throw new Error('post does not belong to user')

            /* La línea `return context.posts.deleteOne({_id:postObjectId})` está eliminando una
            publicación de la base de datos. Utiliza el método `deleteOne` proporcionado por el
            objeto `context.posts` para eliminar la publicación con el `_id` especificado
            (postObjectId). El método devuelve una promesa que se resuelve cuando la eliminación se
            realiza correctamente. */
            return context.posts.deleteOne({_id:postObjectId})

        })
        .then(() => { })
        
}
module.exports = deletePost