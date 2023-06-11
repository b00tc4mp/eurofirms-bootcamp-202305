// Devuelve la lista de usuarios Completa
var userRetrieveAll = function () {
    return posts;
}

// Añadir usuario a la lista
var userToList = function (name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}



