function registerUser(name, email, password) {
    var user

    for (var i = 0; i < users.length; i++) {
        var _user = users[i]

        if (email === _user.email) {
            userExists = true

            break
        }
    }