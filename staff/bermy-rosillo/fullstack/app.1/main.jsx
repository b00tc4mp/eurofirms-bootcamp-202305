/*Global */
const context = {
    set token(value) {

        if (value) {
            sessionStorage.token = value  
            
        }else{
            delete sessionStorage.token     
        }
       
    },

    get token() {
        if (sessionStorage.token)
            return sessionStorage.token

        return null
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)