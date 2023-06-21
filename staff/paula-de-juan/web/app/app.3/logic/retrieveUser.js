function retrieveUser(userId) {
    var user

    for (var i = 0; i < users.length; i++) {
        var _user = users[i];


        if (_user.id === userId) {

            user = _user
            break;
        }
    }

    if (user === undefined) {
        return false;
    } else {
        user = {}

        user.id = ++users.count;
        user.name = _user.name;
        user.email = _user.email;
        

        return user;
    }
}