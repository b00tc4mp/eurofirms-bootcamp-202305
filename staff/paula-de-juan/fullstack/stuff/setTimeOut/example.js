/*console.log('... 1')

setTimeout(() => console.log('hola mundo'), 1000)

console.log('... 2')
*/

let myPromise = new Promise (function (myResolve, myReject){

    setTimeout(() => 
        {myResolve('hola mundo')}
        ,1000)
})

myPromise.then(function(value){
    console.log(value)
})