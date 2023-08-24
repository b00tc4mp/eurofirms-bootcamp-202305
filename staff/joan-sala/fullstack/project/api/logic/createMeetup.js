const { validateId, validateUrl, validateText } = require('./helpers/validators')
const { User, Meetup } = require('../data')

/**
 * The function creates a meetup by validating the input parameters and then creating a new meetup
 * object in the database.
 * @param userId - The ID of the user creating the meetup.
 * @param image - The image parameter is the URL of the image for the meetup.
 * @param text - The "text" parameter is a string that represents the text content of the meetup.
 * @param type - The "type" parameter refers to the type or category of the meetup. It could be
 * something like "technology", "sports", "music", etc.
 * @param adress - The `adress` parameter represents the address of the meetup location.
 * @param dateMeetup - The date of the meetup in the format "YYYY-MM-DD".
 * @param video - The "video" parameter is an optional parameter that represents the URL of a video
 * related to the meetup.
 * @returns a promise.
 */
function createMeetup(userId, image, text, type, adress, dateMeetup, video) {
    validateId(userId)
    validateUrl(image)
    if (video) {
        validateUrl(video)
    }
    validateText(text)
    validateText(type)
    validateText(adress)
    validateText(dateMeetup)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('User not found')

            return Meetup.create({ author: userId, image, video, text, type, adress, dateMeetup: new Date(dateMeetup)})
        })
        .then(() => { })
}
module.exports = createMeetup
