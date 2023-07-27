function retrieveUser(email) {
    var user

    for (var i = 0; i < users.length; i++) {
        var _user = users[i]

        if (_user.email === email) {
            user = {}

            user.name = _user.name
            user.email = _user.email

            break
        }
    }

    if (user === undefined)
        return null
    else
        return user
}