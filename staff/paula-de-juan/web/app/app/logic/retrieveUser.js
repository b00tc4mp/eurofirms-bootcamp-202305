function retrieveUser(userId) {
    let user

    for (let i = 0; i < users.length; i++) {
        const _user = users[i];


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