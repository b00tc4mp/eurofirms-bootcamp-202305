//----------------------
//  Globales
//----------------------

// let userLoggedId = null


const context = {
    set userLoggedId(value) {
        if (value !== null) sessionStorage.userLoggedId = value 

        else delete sessionStorage.userLoggedId
    },

    get userLoggedId(){
        if(sessionStorage.userLoggedId) return parseInt(sessionStorage.userLoggedId)
        
        return null
    }
}



//----------------------
//  React
//----------------------

const virtualRoot = ReactDOM.createRoot(document.getElementById('root'))

virtualRoot.render (<App />)
