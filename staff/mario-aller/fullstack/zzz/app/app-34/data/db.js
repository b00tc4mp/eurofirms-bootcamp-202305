//----------------------
//  Globales
//----------------------

const context = {
    set tokenUser(value) {
        if (value) sessionStorage.tokenUser = value
        else delete sessionStorage.tokenUser
    },
    get tokenUser() {
        if (sessionStorage.tokenUser) return sessionStorage.tokenUser
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
