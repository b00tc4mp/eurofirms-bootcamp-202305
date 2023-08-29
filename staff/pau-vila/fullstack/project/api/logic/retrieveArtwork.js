const { User, Artwork } = require('../data')
const { validateId } = require('./helpers/validators')

function retrieveArtwork(userId, artworkId) {
    validateId(userId)
    validateId(artworkId)

    return Promise.all([User.findById(userId).lean(), Artwork.findById(artworkId, '-date -__v').lean()])
    .then(([user, artwork]) => {
        if (!user) throw new Error('user not found')
        if (!artwork) throw new Error('artwork not found')

        if (artwork.author.toString() !== userId) throw new Error('artwork does not belong to user')

        delete artwork._id
        delete artwork.author

        return artwork
    })

}
module.exports = retrieveArtwork