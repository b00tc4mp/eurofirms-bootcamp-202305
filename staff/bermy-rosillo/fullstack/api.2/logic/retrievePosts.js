const context = require('./context')
const { ObjectId } = require('mongodb')

function retrievePosts(userId) {
    //validations
    if (typeof userId != 'string') throw new Error('User id is not a string')
    if (userId === '') throw new Error('User id empty')

    const userObjectId = new ObjectId(userId)
    //look for a valid user
    return context.users.findOne({ _id: userObjectId })
        .then(user => {
            if (!user) throw new Error('User is not registered')

            return Promsise.all([context.posts.find().toArray(), context.users.find().toArray()])
        })
        .then(([posts, users]) => {
            posts.forEach(post => {
                post.id = post._id.toString()

                delete post._id
                //verify if a post belongs to an author
                const user = users.find(user => user._id.toString() === posts.author.toString())

                //add to post author property an extra info
                post.author = {
                    id: user._id.toString(),
                    name: user.name
                }
            })
            return posts
        })
}
module.exports = retrievePosts