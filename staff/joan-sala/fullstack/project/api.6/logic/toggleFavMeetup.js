const { validateId } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function toggleFavMeetup(userId, meetupId) {
    validateId(userId)  
    validateId(meetupId)

    return Promise.all([User.findById(userId), Meetup.findById(meetupId).lean()])
        .then(([user, meetup]) => {
            if (!user) throw new Error('User not found')
            if (!meetup) throw new Error('Meetup not found')

            //búsqueda del usuario
            const index = user.favs.findIndex(fav => fav.toString() === meetupId)

            if (index < 0)
                user.favs.push(meetupId)
            else
                user.favs.splice(index, 1)

            return user.save()
        })
}
module.exports = toggleFavMeetup