const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function retrieveMeetups(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            //te trae el objeto completo del usuario relacionado con el post   
            //return Post.find({}, '-__v').populate('name', '-email -password -favs -__v').lean()
            return Post.find({}, '-__v').populate('author', 'name').lean()  
                       
            .then(meetups => {
                console.log(posts)
                meetups.forEach(meetup => {
            
                meetup.id = meetup._id.toString()
                
                //sanitaize
                delete meetup._id
   
                const { author } = meetup
               
                if (author?._id) {
                    author.id = author._id.toString()
                    delete author._id
                }
                post.fav = user.favs.some(fav => fav.toString() === meetup.id)
            })
            return posts
        })
})
}

module.exports = retrieveMeetups