const { validateId, validateUrl, validateText, validateMaterial, validateOrnaments } = require('./helpers/validators')
const { User, Artwork } = require('../data')

function createArtwork(userId, image, description, material, ornaments) {
    validateId(userId)
    validateUrl(image)
    validateText(description)
    validateMaterial(material)
    validateOrnaments(ornaments)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not founded')

            return Artwork.create({ author: userId, image, description, material, ornaments})
        })
        .then(() => { })
}

module.exports = createArtwork