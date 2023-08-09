const { validateId } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function retrieveMeetups(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            //te trae el objeto completo del usuario relacionado con el post   
            //return Post.find({}, '-__v').populate('name', '-email -password -favs -__v').lean()
            return Meetup.find({}, '-__v').populate('author', 'name').lean()  
                       
            .then(meetups => {
                meetups.forEach(meetup => {
            
                meetup.id = meetup._id.toString()

                const date = new Date(meetup.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute: "numeric"})
                
                meetup.date = date
        
                //sanitaize
                delete meetup._id
   
                const { author } = meetup
               
                if (author?._id) {
                    author.id = author._id.toString()
                    delete author._id
                }
                meetup.fav = user.favs.some(fav => fav.toString() === meetup.id)
            })
            return meetups        })
})
}
module.exports = retrieveMeetups