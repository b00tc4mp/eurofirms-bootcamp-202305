const { User } = require("../../data/models");
const { validateId } = require("../helpers/validators");

function retrieveUsersNotFollowed(userId) {
    validateId(userId)

     async function getFourRandomUsers(userId) {
        const user = await User.findById(userId).lean()
        const usersFollowed = user.following
        usersFollowed.push(user._id)
        /* Await espera que la función asincrona termine */

        const randomUsers = await User.aggregate([
             /* Etapa de agregación para filtrar los usuarios que no sigue el usuario logueado */
            {
              $match: {
                _id: { $nin: usersFollowed }
              }
            },
            /* Etapa de agregación para obtener 4 usuarios aleatorios */
            {
              $sample: { size: 4 }
            },
           /*  Proyección para mostrar solo el nombre y la imagen de los usuarios */
            {
              $project: {
                _id: 0,
                name: 1,
                image: 1
              }
            }
          ])
          return randomUsers
    }

    return getFourRandomUsers(userId)
}

module.exports = retrieveUsersNotFollowed