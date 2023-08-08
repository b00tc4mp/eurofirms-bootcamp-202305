module.exports = {
    authenticateUser: require('./user-logic/authenticateUser'),
    createChat: require('./chats-logic/createChat'),
    createPost: require('./post-logic/createPost'),
    deletePost: require('./post-logic/deletePost'),
    deleteMessage: require('./chats-logic/deleteMessage'),
    editPost: require('./post-logic/editPost'),
    editMessage: require('./chats-logic/editMessage'),
    editUser: require('./user-logic/editUser'),
    retrieveChat: require('./chats-logic/retrieveChat'),
    retrieveChats: require('./chats-logic/retrieveChats'),
    registerUser: require('./user-logic/registerUser'),
    retrieveFavPosts: require('./post-logic/retrieveFavPosts'),
    retrievePost: require('./post-logic/retrievePost'),
    retrievePosts: require('./post-logic/retrievePosts'),
    retrievePostsOfUser: require('./post-logic/retrievePostsOfUser'),
    retrievePostsNotFollowed: require('./post-logic/retrievePostsNotFollowed'),
    retrieveUser: require('./user-logic/retrieveUser'),
    retrieveUserById: require('./user-logic/retrieveUserById'),
    retrieveUsersNotFollowed: require('./user-logic/retrieveUsersNotFollowed'),
    searchUser: require('./user-logic/searchUser'),
    sendMessage: require('./chats-logic/sendMessage'),
    toggleFavPost: require('./post-logic/toggleFavPost'),
    toggleFollowUser: require('./user-logic/toggleFollowUser')
}