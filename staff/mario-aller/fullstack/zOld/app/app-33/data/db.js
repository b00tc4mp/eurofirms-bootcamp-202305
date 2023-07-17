//----------------------
//  Globales
//----------------------

const context = {
    set userLoggedId(value) {
        if (value) sessionStorage.userLoggedId = value
        else delete sessionStorage.userLoggedId
    },
    get userLoggedId() {
        if (sessionStorage.userLoggedId) return sessionStorage.userLoggedId
        return null
    }
}

// const db = {
//     set users(value) {
//         localStorage.users = JSON.stringify(value)
//     },
//     get users() {
//         if (localStorage.users) return JSON.parse(localStorage.users)
//         return []
//     },

//     set posts(value) {
//         localStorage.posts = JSON.stringify(value)
//     },
//     get posts() {
//         if (localStorage.posts) return JSON.parse(localStorage.posts)
//         return []
//     },

//     set userIdCounter(value) {
//         localStorage.userIdCounter = value
//     },
//     get userIdCounter() {
//         if (localStorage.userIdCounter) return parseInt(localStorage.userIdCounter)
//         return 0
//     },

//     set postIdCounter(value) {
//         localStorage.postIdCounter = value
//     },
//     get postIdCounter() {
//         if (localStorage.postIdCounter) return parseInt(localStorage.postIdCounter)
//         return 0
//     }
// }
