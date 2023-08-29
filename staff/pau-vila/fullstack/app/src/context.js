// globals

const context = {
    set token(token) {
        if (token) {
            sessionStorage.token = token

            return 
        }
        delete sessionStorage.token
    },

    get token() {
        if (sessionStorage.token)
            return sessionStorage.token

        return null
    }
}
export default context

//forma de guardar y recuperar un token en el almacenamiento del navegador utilizando sessionStorage.