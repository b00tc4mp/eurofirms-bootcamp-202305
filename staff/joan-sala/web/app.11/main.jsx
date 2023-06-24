/* Globals */

const context = {
    set userId(userId) {
        if (userId) {
            sessionStorage.userId = userId

            return
        }
        delete sessionStorage.userId
    },
    get userId() {
        if (sessionStorage.userId)
            return parseInt(sessionStorage.userId)
        return null
    }
}
// react initialization

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)