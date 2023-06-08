function registerUser(name, email, password) {
    var user;
    for (var i = 0; i < users.length; i++) {
        var _user = users[i]


        if (_user.email === email) {
            user = _user
            break;
        }
    }

    if (user !== undefined) {
        return false;
    }
    else {
        user = {}

        user.id = ++users.count;
        user.name = name;
        user.email = email;
        user.password = password;

        users.push(user);

        return true;

    }
}