const { validateId } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function retrieveMeetup(userId, meetupId) {
    validateId(userId)
    validateId(meetupId)

    
    //Búsqueda completa, devuelve una cadena de promesas. DOCUMENTO
    return Promise.all([User.findById(userId).lean(), Meetup.findById(meetupId, '-date -__v').lean()])
        .then(([user, meetup]) => { //DESTRUCTURAR    
            if (!user) throw new Error('User not found')
            if (!meetup) throw new Error('Meetup not found')

            if (meetup.author.toString() !== userId) throw new Error('Meetup does not belong to user')
            //detcta si el userId no es igual al string del autor del meetup

            delete meetup._id
            delete meetup.author
            meetup.fav = user.favs.some(fav => fav.toString() === meetup.id)

            return meetup
            
        })
        
}
module.exports = retrieveMeetup