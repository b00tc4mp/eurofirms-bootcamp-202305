//recuperar datos de localStorage(almacen persistente)
const db ={
    set users(users){
        localStorage = JSON.stringify(users)
    },

    get users(){
        if(localStorage.users)
            return JSON.parse(localStorage.users)
        
        return [] //devuelve un array vacio , en caso que no hayan usuarios(la 1ra vez)
    },

    set posts(posts){
        localStorage = JSON.stringify(posts)
    },

    get posts(){
        if(localStorage.posts)
            return JSON.parse(localStorage.posts)
        
        return [] //devuelve un array vacio ,
        // en caso que no hayan posts publicados(la 1ra vez)
    }
}