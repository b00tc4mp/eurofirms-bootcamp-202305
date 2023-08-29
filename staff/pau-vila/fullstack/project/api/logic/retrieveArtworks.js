const { validateId } = require('./helpers/validators')
const { User, Artwork } = require('../data')

function retrieveArtworks(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            return Artwork.find({}, '-__v').populate('author', 'name').lean()
                .then(artworks => {
                    // sanitize
                    artworks.forEach(artwork => {
                        artwork.id = artwork._id.toString()
                        delete artwork._id

                        const { author } = artwork

                        if (author._id) {
                            author.id = author._id.toString()
                            delete author._id
                        }

                        artwork.fav = user.favs.some(fav => fav.toString() === artwork.id)
                    })

                    return artworks
                })
        })
}

module.exports = retrieveArtworks