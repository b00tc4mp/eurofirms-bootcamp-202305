const db = {
    set users(users) {
        localStorage.users = JSON.stringify(users)
    },

    get users() {
        if (localStorage.users)
            return JSON.parse(localStorage.users)

        return []
    },

    set posts(posts) {
        localStorage.posts = JSON.stringify(posts)
    },

    get posts() {
        if (localStorage.posts)
            return JSON.parse(localStorage.posts)

        return []
    }
}