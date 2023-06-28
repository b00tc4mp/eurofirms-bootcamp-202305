
const context = {
    set userId(value){
        if(value){
            sessionStorage.userId = value

            return
        }
        delete sessionStorage.userId
    },
    
    get userId(){
        if (sessionStorage.userId){
            return parseInt(sessionStorage.userId)
        }
        return null
    }
}


// REACT initialization

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)