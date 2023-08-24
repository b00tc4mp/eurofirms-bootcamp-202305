const context = require('./context')
const { ObjectId } = require('mongodb')
const {validateId} = require('./helpers/validators')

function retrievePosts(userId) {
    validateId(userId)

    return context.users.findOne({_id: new ObjectId(userId)})
    .then((user)=>{
        if(!user) throw new Error('user not found')

        return Promise.all([context.posts.find().toArray(), context.users.find().toArray()])
    })
    .then(([posts, users])=>{
        posts.forEach(post => {
            post.id = post._id.toString()
            delete post._id
            
           const userFound = users.find((user) => user._id.toString() === post.author.toString())
           if(!userFound) throw new Error('userFound not found')

           post.author = {name: userFound.name, id: userFound._id.toString()}

        });
        return posts
    })}

module.exports = retrievePosts  