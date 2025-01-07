/* 
    Este código pretende validar si el post.author y el userId son iguales
    PERO NO FUNCIONA
*/

const context = require('./context')
const {ObjectId} = require('mongodb')

function deletePost(userId, postId) {
    if(typeof userId !== 'string') throw new Error ('userId is not a string')
    if(userId === '') throw new Error ('userId is empty')
    if(typeof postId !== 'string') throw new Error ('postId is not a string')
    if(postId === '') throw new Error ('postId is empty')

    return context.users.findOne({_id: new ObjectId(userId)})
    .then(user => {
        if (!user) throw new Error ('userId not found')

        const userMongoId = user._id
        const postFind = context.posts.findOne({_id: new ObjectId(postId)})

        return {
            userMongoId: userMongoId,
            postFind: postFind
        }
    })
    .then(result => {
        const post = result.postFind
        
        if (!post) throw new Error('postId not found')

        const userMongoId = result.userMongoId
        const author = post.author
        
        if (userMongoId !== author) {
            throw new Error('userMongoId and author are different');
          }
        
        const postMongoId = post._id
        return context.posts.deleteOne({ _id: postMongoId}) 
    })
}

module.exports = deletePost