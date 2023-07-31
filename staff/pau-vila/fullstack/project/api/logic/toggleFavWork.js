//const { toggleFavArtwork } = require('.')
//const { User, Work } = require('../data')
//const { validateId } = require("./helpers/validators")

//function toggleFavArtwork(userId, workId) {
    //validateId(userId)
    //validateId(workId)

    //return Promise.all([User.findById(userId), Work.findById(workId).lean()])
      //  .then(([user, work]) => {
        //    if (!user) throw new Error('user not found')
          //  if (!work) throw new Error('work not found')

            //const index = user.favs.findIndex(fav => fav.toString() === workId)
            
            //if (index < 0) 
              //  user.favs.push(workId)
             //else 
               // user.favs.splice(index, 1)
            
            //return user.save()
        //})
//}

//module.exports = toggleFavArtwork
