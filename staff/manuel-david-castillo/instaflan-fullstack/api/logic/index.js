module.exports = {
    authenticateUser: require('./user-logic/authenticateUser'),
    createPost: require('./post-logic/createPost'),
    deletePost: require('./post-logic/deletePost'),
    editPost: require('./post-logic/editPost'),
    editUser: require('./user-logic/editUser'),
    registerUser: require('./user-logic/registerUser'),
    retrievePost: require('./post-logic/retrievePost'),
    retrievePosts: require('./post-logic/retrievePosts'),
    retrieveUser: require('./user-logic/retrieveUser'),
    retrieveUserById: require('./user-logic/retrieveUserById')
}