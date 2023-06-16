function authenticateUser(email,password){
    var user 
    for(var i = 0 ; i < users.length ; i++){
        var _user = users[i]
       
        if(_user.email === email){
            user = _user 
            break   
        }
    }
    if(user === undefined){
        return false
    }else if(user.password !== password){
        return false
    }else{
       return user.id
    }
}//Function closed