//constructor
function Caray(... items){
    
    for( let i = 0 ; i < items.length ; i++){
        this[i] = items[i]
    }
    this.length = items.length
}
//methods
Caray.prototype.talk = function(){console.log('I am talking')}
//------------------------------------------------------------------
Caray.prototype.some = function(array,callback){
    
    for(let i = 0 ; i < array.length ; i++){
        const element = array[i]
        
        if(callback (element) )
            return true
    }
    return false
}




