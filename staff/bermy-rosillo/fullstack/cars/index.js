function Car(string){
    
    this.string=string
    this.steps=0
}
Car.prototype.render = function(){
    console.log(' '.repeat(this.steps)+this.string)
}



let steps=0
const carP = new Car('P')
const carT=new Car('T')
const carX= new Car('X')

const interval= setInterval(()=>{
    console.clear()
    const line = steps <= 100 ? ' '.repeat(100 - steps) +'|' : ''

    console.log(' '.repeat(steps)+'P' +  line)
    console.log(' '.repeat(steps)+'T'  +  line)
    console.log(' '.repeat(steps) + 'X'  +  line)
    

    steps++
    if(steps >= 105){
        clearInterval(interval)

        console.log('P wins')
    }
},50)
