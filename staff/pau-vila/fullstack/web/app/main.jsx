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
        if (sessionStorage.userId)
            return sessionStorage.userId

        return null
    }
}

// react initialitation

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

//"get" se utiliza para obtener el valor de una variable o propiedad 
//"set" se utiliza para asignar un valor a una variable o propiedad 
//Estos métodos se utilizan en la implementación de información para el principio de ocultamiento y dar acceso a los datos de un objeto.