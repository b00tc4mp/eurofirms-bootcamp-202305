const { validateId } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function retrieveMeetups(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

                        return Meetup.find({}, '-__v').populate('author', 'name').lean()  
                       
            .then(meetups => {
                meetups.forEach(meetup => {
            
                meetup.id = meetup._id.toString()

                meetup.dateMeetup = new Date(meetup.dateMeetup).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) //, hour:"numeric", minute: "numeric"
                
                //sanitaize
                delete meetup._id
   
                const { author } = meetup
               
                if (author?._id) {
                    author.id = author._id.toString()
                    delete author._id
                }
                meetup.fav = user.favs.some(fav => fav.toString() === meetup.id)
            })
            return meetups        
        })
    })
}
module.exports = retrieveMeetups