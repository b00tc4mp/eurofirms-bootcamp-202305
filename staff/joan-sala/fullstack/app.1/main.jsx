/* Globals */

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
// react initialization

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)