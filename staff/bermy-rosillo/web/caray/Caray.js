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





