const db = {
    set users(users){
        localStorage.users = JSON.stringify(users)
    },

    get users(){
        if(localStorage.users)
            return JSON.parse(localStorage.users)
        
        return [] //array vacio para que no pete
    },
    
    set userIdCount(userIdCount){
        localStorage.userIdCount = userIdCount
    },

    get userIdCount(){
        if(localStorage.userIdCount) 
            return parseInt(localStorage.userIdCount)
        
        return 0
    },

    set posts(posts){
        localStorage.posts = JSON.stringify(posts)
    },

    get posts(){
        if(localStorage.posts)
            return JSON.parse(localStorage.posts)
        
        return []
    },

    set postIdCount(postIdCount){
        localStorage.postIdCount = postIdCount
    },

    get postIdCount(){
        if(localStorage.postIdCount)
            return parseInt(localStorage.postIdCount)
        
        return 0
    }
}