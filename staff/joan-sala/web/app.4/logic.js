/**
 * LOGIC
 */

function registerUser(name, email, password) {
    var user

    for (var i = 0; i < users.length; i++) {
        var _user = users[i]

        if (_user.email === email) {
            user = _user

            break
        }
    }

    if (user !== undefined)
        return false
    else {
        user = {}

        user.name = name
        user.email = email
        user.password = password

        users.push(user)

        return true
    }
}

function authenticateUser(email, password) {
    var user

    for (var i = 0; i < users.length; i++) {
        var _user = users[i]

        if (_user.email === email) {
            user = _user

            break
        }
    }

    if (user === undefined)
        return false
    else if (user.password !== password)
        return false
    else
        return true
}

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

function createPost(image, text) {
    if (image.length === 0) return false
    if (text.length === 0) return false

    var post = {}

    post.image = image
    post.text = text

    posts.push(post)

    return true
}

function retrievePosts() {
    return posts
}