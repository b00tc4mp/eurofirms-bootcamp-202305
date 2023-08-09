function Car(icon){
    this.icon = icon
    this.steps = 0
}

Car.prototype.render = function(){
    console.log(' '.repeat(this.steps) + this.icon)
}

const car = new Car('car')
const taxi = new Car('taxi')
const bus = new car('bus')

let steps = 0

const interval = setInterval(() => {

    console.clear()

    car.render()
    taxi.render()
    bus.render()

    steps++

    car.steps = steps
    taxi.steps = steps
    bus.steps = steps
    
    if (steps === 100){
        clearInterval(interval)
    }
    console.log('steps' + steps)

}, 350)

console.log('start')