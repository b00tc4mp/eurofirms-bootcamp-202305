const { validateId, validateUrl, validateText, validateOrnaments } = require('./helpers/validators')
const { User, Artwork } = require('../data')

function createArtwork(userId, image, description, materials, ornaments) {
    validateId(userId)
    validateUrl(image)
    validateText(description)
    validateText(materials)
    validateOrnaments(ornaments)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not founded')

            return Artwork.create({ author: userId, image, description, materials, ornaments})
        })
        .then(() => { })
}

module.exports = createArtwork