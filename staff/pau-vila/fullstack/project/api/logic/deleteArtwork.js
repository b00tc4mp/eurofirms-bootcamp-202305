const { validateId } = require('./helpers/validators')
const { User, Artwork } = require('../data')

function deleteArtwork(userId, artworkId) {
    validateId(userId)
    validateId(artworkId)

    return Promise.all([User.findById(userId).lean(), Artwork.findById(artworkId).lean()])
        .then(([user, artwork]) => {
            if (!user) throw new Error('user not found')
            if (!artwork) throw new Error('artwork not found')
           
            if (artwork.author.toString() !== userId) throw new Error('artwork does not belong to user')
            
            return Artwork.deleteOne({_id: artwork._id})

        })
        .then(() => { })
        
}
module.exports = deleteArtwork