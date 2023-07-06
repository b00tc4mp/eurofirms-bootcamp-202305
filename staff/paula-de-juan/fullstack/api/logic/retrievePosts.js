const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')

function retrievePosts(userId){
    validateId(userId)

    const userObjectId = new ObjectId(userId)

    return context.users.findOne({ _id: userObjectId })
        .then(user =>{
            if(!user) throw new Error('user not found')

            return Promise.all([context.posts.find().toArray(), context.users.find().toarray()])
        })
        .then(([posts, users]) => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                const user = users.find(user => user._id.toString() === post.author.toString())

                post.author ={
                    id: user._id.toString(),
                    name: user.name
                }
            })
        return posts
        })
}
module.exports = retrievePosts