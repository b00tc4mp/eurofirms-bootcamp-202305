const { User, Post } = require('../data/models')
const { ObjectId } = require('mongoose')
const { validateId } = require('./helpers/validators')

function retrievePosts(userId) {
    validateId(userId)

    //const userObjectId = new ObjectId(userId)

    //return context.users.findOne({ _id: userObjectId })
      
    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            //Codigo nuevo de Mongoose
            return Post.find().populate('author').lean()       
        
        /*
        Con unicamenter MongoDb usabamos una promesa

        return Promise.all([context.posts.find().sort({date: -1}).toArray(), context.users.find().toArray()])
        }) 
        .then(([posts, users]) => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                const user = users.find(user => user._id.toString() === post.author.toString())
                if (user) {
                    post.author = {
                        id: user._id.toString(),
                        name: user.name
                    }
                }
                else {
                    const authorId = post.author
                    post.author={
                        id: authorId,
                        name: 'Unknown'
                    }
                 }
            })
            return posts */
        })
    }
module.exports = retrievePosts