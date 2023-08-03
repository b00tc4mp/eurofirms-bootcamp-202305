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
export default context