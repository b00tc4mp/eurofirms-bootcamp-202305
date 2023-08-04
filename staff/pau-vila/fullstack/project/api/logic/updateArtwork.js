const { validateId, validateUrl, validateText } = require('./helpers/validators')
const { User, Artwork } = require('../data')

function updateArtwork(userId, artworkId, image, description) {
    validateId(userId)
    validateId(artworkId)
    validateUrl(image)
    validateText(description)

    return Promise.all([User.findById(userId).lean(), Artwork.findById(artworkId)])
        .then(([user, artwork]) => {
            if (!user) throw new Error('user not found')
            if (!artwork) throw new Error('artwork not found')

            if (artwork.author.toString() !== userId) throw new Error('artwork does not belong to user')

            artwork.image = image
            artwork.Text = description

            return artwork.save()
        })
        .then(() => { })
}

module.exports = updateArtwork