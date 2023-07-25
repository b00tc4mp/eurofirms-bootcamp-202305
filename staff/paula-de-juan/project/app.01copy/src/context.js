/* Global Scope */

const context = {
    set userId(value){  
        if (value === null){
            delete sessionStorage.userId
        } else {
        sessionStorage.userId = value
        }
    },

    get userId(){
        if (sessionStorage.userId){
            return sessionStorage.userId
        }       
    return null
    }
}
export default context