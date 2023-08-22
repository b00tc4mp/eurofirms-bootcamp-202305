const { validateId } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function toggleFavMeetup(userId, meetupId) {
    validateId(userId)  
    validateId(meetupId)

    return Promise.all([User.findById(userId), Meetup.findById(meetupId)])
        .then(([user, meetup]) => {
            if (!user) throw new Error('User not found')
            if (!meetup) throw new Error('Meetup not found')

            //búsqueda del usuario
            const index = user.favs.findIndex(fav => fav.toString() === meetupId)

            if (index < 0){
                user.favs.push(meetupId)
                meetup.likes++
            }
            else{
                user.favs.splice(index, 1)
                meetup.likes--
            }
            return Promise.all([user.save(), meetup.save()])
        })
        .then(()=> { })
}
module.exports = toggleFavMeetup