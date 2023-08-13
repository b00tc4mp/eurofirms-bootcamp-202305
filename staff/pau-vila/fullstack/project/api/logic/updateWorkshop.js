const { validateId, validateUrl, validateText, validateDate, validateAttendantsLimit } = require('./helpers/validators')
const { User, Workshop } = require('../data')

function updateWorkshop(userId, workshopId, place,
    codeZIP, dateStart, dateEnd, image, video, description, attendantsLimit) {
    validateId(userId)
    validateId(workshopId)
    validateText(place)
    validateText(codeZIP)
    validateDate(dateStart)
    validateDate(dateEnd)
    validateText(description)
    validateAttendantsLimit(attendantsLimit)
    if (image) validateUrl(image)
    if (video) validateUrl(video)
    
    if (dateStart > dateEnd)
        throw new Error('start date cannot be greater than end date')

    return Promise.all([User.findById(userId).lean(), Workshop.findById(workshopId)])
        .then(([user, workshop]) => {
            if (!user) throw new Error('user not found')
            if (!workshop) throw new Error('workshop not found')

            if (workshop.planner.toString() !== userId) throw new Error('workshop does not belong to user')

            workshop.description = description
            workshop.place = place
            workshop.codeZIP = codeZIP
            workshop.Date = dateStart
            workshop.Date = dateEnd
            workshop.attendantsLimit = attendantsLimit
            workshop.video = video
            workshop.image = image
            
            return workshop.save()
        })
        .then(() => { })
}

module.exports = updateWorkshop