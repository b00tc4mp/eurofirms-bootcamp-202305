const db = {
    set users(users){
        localStorage.users = JSON.stringify(users)
    },
    get users() {
        if (localStorage.users) {
            return JSON.parse(localStorage.users)
        }
        return []
    },

    set usersIdCount(usersIdCount) {
        localStorage.usersIdCount = usersIdCount
    },
    get usersIdCount() {
        if (localStorage.usersIdCount) {
            return parseInt(localStorage.usersIdCount)
        }
        return 0
    },

    set posts(posts) {
        localStorage.posts = JSON.stringify(posts)
    },
    get posts() {
        if (localStorage.posts) {
        return JSON.parse(localStorage.posts)
    }
    return []
},

set postsIdCount(postsIdCount) {
    localStorage.postsIdCount = postsIdCount
},
get postsIdCount() {
    if (localStorage.postsIdCount) {
        return parseInt(localStorage.postsIdCount)
    }
    return 0
},
}