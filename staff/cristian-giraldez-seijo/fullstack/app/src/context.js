/* This code is defining a JavaScript object called `context` with two properties: `token` and `token`.
The `token` property is defined as a setter and getter. */
const context = {
    set token(value) {
        if (value) {
            sessionStorage.token = value
            return
        }
        delete sessionStorage.token
    },
    get token() {
        if (sessionStorage.token) {
            return sessionStorage.token
        }
        return null
    }
}
export default context