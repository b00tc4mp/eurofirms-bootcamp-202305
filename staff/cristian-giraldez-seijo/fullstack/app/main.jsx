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

const virtualRoot = ReactDOM.createRoot(document.getElementById('root'))
virtualRoot.render(<App />)