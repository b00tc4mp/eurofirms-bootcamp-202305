const { validateId, validateUrl, validateText, validateOrnaments } = require('./helpers/validators')
const { User, Artwork } = require('../data')

function updateArtwork(userId, artworkId, image, description, materials, ornaments) {
    validateId(userId)
    validateId(artworkId)
    validateUrl(image)
    validateText(description)
    validateText(materials)
    validateOrnaments(ornaments)

    return Promise.all([User.findById(userId).lean(), Artwork.findById(artworkId)])
        .then(([user, artwork]) => {
            if (!user) throw new Error('user not found')
            if (!artwork) throw new Error('artwork not found')

            if (artwork.author.toString() !== userId) throw new Error('artwork does not belong to user')

            artwork.image = image
            artwork.description = description
            artwork.materials = materials
            artwork.ornaments = ornaments

            return artwork.save()
        })
        .then(() => { })
}

module.exports = updateArtwork