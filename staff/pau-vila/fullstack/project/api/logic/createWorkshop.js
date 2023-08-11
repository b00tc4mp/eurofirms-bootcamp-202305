const { validateId, validateUrl, validateText, validateDate, validateAttendantsLimit } = require('./helpers/validators')
const { User, Workshop } = require('../data')

function createWorkshop(userId, description, place,
    codeZIP, dateStart, dateEnd, attendantsLimit, image, video) {
    validateId(userId)
    validateText(description)
    validateText(place)
    validateText(codeZIP)
    validateDate(dateStart)
    validateDate(dateEnd)
    validateAttendantsLimit(attendantsLimit)
    if (image) validateUrl(image)
    if (video) validateUrl(video)

    if (dateStart > dateEnd)
        throw new Error('start date cannot be greater than end date')


    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not founded')

            const data = {
                planner: userId, description, place,
                codeZIP, dateStart, dateEnd, attendantsLimit
            }

            if (video) data.video = video
            if (image) data.image = image

            return Workshop.create(data)
        })
        .then(() => { })
}

module.exports = createWorkshop