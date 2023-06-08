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
        user.name = user.name;
        user.email = user.email;
        

        return user;
    }
}