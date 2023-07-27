var context = {
    set userId(userId) {
        sessionStorage.userId = userId
    },

    get userId() {
        return parseInt(sessionStorage.userId)
    }
}
// undefined
context.userId = 100
// 100
context.userId
// 100
sessionStorage.userId
// '100'
context.userId
// 100
context.userId = 1000
// 1000
sessionStorage.userId
// '1000'
context.userId
// 1000
context
// {}userId: (...)get userId: ƒ userId()set userId: ƒ userId(userId)[[Prototype]]: Object
console.log(context.userId)
// VM1809:1 1000