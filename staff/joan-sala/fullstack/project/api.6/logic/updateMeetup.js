const { validateId, validateText, validateUrl, validateDate } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function updateMeetup(userId, meetupId, image, text, type, adress, dateMeetup, video) {
    validateId(userId)
    validateId(meetupId)
    validateUrl(image)
    if(video) validateUrl(video)
    validateText(text)
    validateText(type)
    validateText(adress)
    validateText(dateMeetup) //aquí ssólo strinds

    return Promise.all([User.findById(userId).lean(), Meetup.findById(meetupId)])
        .then(([user, meetup]) => {
            if (!user) throw new Error('User not found')
            if (!meetup) throw new Error('Meetup not found')

            if (meetup.author.toString() !== userId) throw new Error('meetup does not belong to user')
            meetup.image = image
            meetup.text = text
            meetup.type = type
            meetup.adress = adress
            meetup.dateMeetup = new Date(dateMeetup)//hacer si o si la conversión de string a fecha

            return meetup.save()
        })
        .then(()=> {})
}
module.exports = updateMeetup