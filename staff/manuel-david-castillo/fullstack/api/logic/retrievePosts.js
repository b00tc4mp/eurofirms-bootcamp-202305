const context = require('./context')
const { ObjectId } = require('mongodb')
const {validateId} = require('./helpers/validators')

function retrievePosts(userId) {
    validateId(userId)

    return Promise.all([context.posts.find().sort({date: -1}).toArray(),
             context.users.find().toArray(), 
             context.users.findOne({_id: new ObjectId(userId)})])
    .then(([posts, users, user])=>{
        if(!user) throw new Error('user not found')
        posts.forEach(post => {
            post.id = post._id.toString()
            delete post._id
            
           const userFound = users.find((user) => user._id.toString() === post.author.toString())
           if(!userFound) {
            post.author = {name: 'not found', id: null}
           } else {
            post.author = {name: userFound.name, id: userFound._id.toString()}
            }

            if (!user.favPosts) user.favPosts = []

            const favPosts = user.favPosts.map((post) => {
                return post.toString()
            })

           post.fav = favPosts.includes(post.id)
        });
        return posts
    })}

module.exports = retrievePosts  