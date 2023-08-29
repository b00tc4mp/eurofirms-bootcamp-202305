function Car(icon) {
    this.icon = icon
    this.steps = 0
}

Car.prototype.render = function () {
    console.log(' '.repeat(this.steps) + this.icon)
}

const thieve = new Car('🚘')
const taxi = new Car('🚖')
const police = new Car('🚔')

let steps = 0

const interval = setInterval(() => {
    console.clear()

    thieve.render()
    taxi.render()
    police.render()

    steps++

    thieve.steps = steps
    taxi.steps = steps
    police.steps = steps

    if (steps === 100)
        clearInterval(interval)

    console.log('steps' + steps)
}, 400)

console.log('start')