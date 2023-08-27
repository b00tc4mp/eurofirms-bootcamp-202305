
/*console.log('... 1')

setTimeout(() => console.log('hola mundo'), 1000)

console.log('... 2')*/

function setTimeoutPromise(seg){
    
    setTimeout((esg)=>{
        console.log('hello world')
    })
    .then(seg=>{
        console.log()
    })
    console.log('...2')
}
//-----------------------
