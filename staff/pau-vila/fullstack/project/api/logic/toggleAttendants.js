const { User, Workshop } = require('../data')
const { validateId } = require('./helpers/validators')

function toggleAttendants(userId, workshopId) {
    validateId(userId)
    validateId(workshopId)

    return Promise.all([User.findById(userId), Workshop.findById(workshopId)])
        .then(([user, workshop]) => {
            /* El código `if (!user) throw new Error('user not found')` y `if (!workshop) throw new
            Error('workshop not found')` comprueban si los objetos `user` y `workshop` existen . Si
            alguno de ellos no existe, arroja un error con el mensaje 'usuario no encontrado' o
            'taller no encontrado' respectivamente. Esta es una forma de manejar los casos en los
            que el usuario o taller con la identificación dada no existe en la base de datos. */
            if (!user) throw new Error('user not found')
            if (!workshop) throw new Error('workshop not found')

            /* La línea `const index = workshops.attendants.indexOf(userId)` está encontrando el índice del
            `userId` en la matriz `attendants` del objeto `workshop`. Utiliza el método `indexOf` para
            buscar el `userId` en la matriz `attendants` y devuelve el índice de la primera aparición del
            `userId`. Si el `userId` no se encuentra en la matriz `asistentes`, devolverá -1. */
            const index = workshop.attendants.indexOf(userId)
            if (index === -1)
                workshop.attendants.push(user._id)
            else
                workshop.attendants.splice(index, 1)

            return workshop.save()
        })
}

module.exports = toggleAttendants


