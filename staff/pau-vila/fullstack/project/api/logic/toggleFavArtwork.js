const { User, Artwork } = require('../data')
const { validateId } = require("./helpers/validators")

function toggleFavArtwork(userId, artworkId) {
  validateId(userId)
  validateId(artworkId)

  return Promise.all([User.findById(userId), Artwork.findById(artworkId).lean()])
    .then(([user, artwork]) => {
      if (!user) throw new Error('user not found')
      if (!artwork) throw new Error('artwork not found')

      const index = user.favs.findIndex(fav => fav.toString() === artworkId)

      if (index < 0)
        user.favs.push(artworkId)
      else
        user.favs.splice(index, 1)

      return user.save()
    })
}

module.exports = toggleFavArtwork
