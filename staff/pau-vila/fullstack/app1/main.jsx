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

// react initialitation

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

//"get" se utiliza para obtener el valor de una variable o propiedad 
//"set" se utiliza para asignar un valor a una variable o propiedad 
//Estos métodos se utilizan en la implementación de información para el principio de ocultamiento y dar acceso a los datos de un objeto.