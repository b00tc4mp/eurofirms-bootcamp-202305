function Car(icon, steps = 0) {
    this.icon = icon
    this.steps = steps
}

Car.prototype.render = function () {
    console.log(' '.repeat(this.steps) + this.icon)
}

function randomStep() {

    return Math.floor(Math.random() * 10)
}

const carThief = new Car('Caco', 0)
const carTaxi = new Car('Taxi', 0)
const carPolice = new Car('Poli', 0)

const interval = setInterval(() => {
    console.clear()

    console.log(' '.repeat(100) + 'META')
    carThief.render()
    carPolice.render()
    carTaxi.render()

    if (carTaxi.steps >= 100 || carPolice.steps >= 100 || carThief.steps >= 100) {
        clearInterval(interval)
    }

    carThief.steps += randomStep()
    carTaxi.steps += randomStep()
    carPolice.steps += randomStep()

    const maxValue = Math.max(carThief.steps, carPolice.steps, carPolice.steps)
    switch(maxValue){
        case carThief.steps: console.log('El que gana la carrera')
    }

},400)