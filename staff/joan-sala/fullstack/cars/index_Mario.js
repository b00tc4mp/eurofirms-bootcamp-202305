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

const carThief = new Car('🚘', 0)
const carTaxi = new Car('🚖', 0)
const carPolice = new Car('🚔', 0)

const interval = setInterval(() => {
    console.clear()

    console.log(' '.repeat(100) + '🏁')
    carThief.render()
    carPolice.render()
    carTaxi.render()

    carThief.steps += randomStep()
    carTaxi.steps += randomStep()
    carPolice.steps += randomStep()

    if (carTaxi.steps >= 100 || carPolice.steps >= 100 || carThief.steps >= 100) {
        clearInterval(interval)
    }
},400)