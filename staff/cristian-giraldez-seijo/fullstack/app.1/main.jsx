/* The code block is defining a global variable `context` and creating a virtual root element using
ReactDOM. */

// globals

const context = {
    set userId(value) {
        if (value) {
            sessionStorage.userId = value
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

// react initialization

const virtualRoot = ReactDOM.createRoot(document.getElementById('root'))
virtualRoot.render(<App />)