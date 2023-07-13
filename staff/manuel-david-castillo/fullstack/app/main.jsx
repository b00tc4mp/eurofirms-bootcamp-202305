/* GLOBALS */

const context = {
    set userId(userId) {
        if (userId) {
            sessionStorage.userId = userId

            return
        }

        delete sessionStorage.userId
    },

    get userId() {
        if (sessionStorage.userId) {
            return sessionStorage.userId
        }

        return null
    }
}

/* react initialitation */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)