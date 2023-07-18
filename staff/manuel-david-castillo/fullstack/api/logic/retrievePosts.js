const context = require('./context')
const { ObjectId } = require('mongodb')
const {validateId} = require('./helpers/validators')

function retrievePosts(userId) {
    validateId(userId)

    return Promise.all([context.posts.find().sort({date: -1}).toArray(),
             context.users.find().toArray(), 
             context.users.findOne({_id: new ObjectId(userId)})])
    .then(([posts, users, user])=>{
        posts.forEach(post => {
            post.id = post._id.toString()
            delete post._id
            
           const userFound = users.find((user) => user._id.toString() === post.author.toString())
           if(!userFound) throw new Error('userFound not found')

           if(!user) throw new Error('user not found')
           if(!user.favPosts || !user.favPosts.includes(post.id)) {
            post.fav = false
           } else if (user.favPosts.includes(post.id)) {
            post.fav = true
           }

           post.author = {name: userFound.name, id: userFound._id.toString()}

        });
        return posts
    })}

module.exports = retrievePosts  