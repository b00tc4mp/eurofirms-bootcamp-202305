const { ObjectId } = require('mongodb')
const context = require('./context')
const { validateId } = require('./helpers/validators')

function retrievePosts(userId){
    validateId(userId)

    const {users, posts} = context

    const userObjectId = new ObjectId(userId)

    return context.users.findOne({_id: userObjectId})
    .then(user=>{
        if(!user) throw new Error('User not found')

        return Promise.all([context.posts.find().sort({date:-1}).toArray(), users.find().toArray()])
        //el 'sort({date:-1}) es para mostrar el último post el primeroo
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