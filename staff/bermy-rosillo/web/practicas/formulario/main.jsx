/*Global */ /*getters and setters */
//let userId = null; //no user conected
const context ={
    set userId(value){
        if(value){
            sessionStorage.userId=value
            return    
        }
        delete sessionStorage.userId //elimina el dato del sessionStorage
            
    },

    get userId(){
        if(sessionStorage.userId)
            return parseInt(sessionStorage.userId)
        
        return null       
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)