const { ObjectId } = require('mongodb')
const context = require('./context')
const { validateId } = require('./helpers/validators')

function retrievePosts(userId){
    validateId(userId)

    const {users, posts} = context

    const userObjectId = new ObjectId(userId)

    return users.findOne({_id: userObjectId})
    .then(user=>{
        if(!user) throw new Error('User not found')

        return Promise.all([posts.find().toArray(), users.find().toArray()])
    })
    .then(([posts, users])=>{
        posts.forEach(post=>{
            post.id = post._id.toString()
            delete post._id

            const userFounded = users.find(user=> user._id.toString() === post.author.toString())

            if(userFounded){
            post.author = {
                id: userFounded._id.toString(),
                name: userFounded.name
            }
        }
        })

        return posts
    })
}
module.exports = retrievePosts