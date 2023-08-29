function Car(icon) {
    this.icon = icon
    this.steps = 0
}

Car.prototype.render = function () {
    console.log(' '.repeat(this.steps) + this.icon)
}

const thief = new Car('🚘')
const taxi = new Car ('🚖')
const police = new Car('🚔')

const randomSteps = () => Math.round(Math.random() * 10)

const interval = setInterval(() => {
    console.clear()

    thief.render()
    taxi.render()
    police.render()

    thief.steps += randomSteps()
    taxi.steps += randomSteps()
    police.steps += randomSteps()

  if (thief.steps > 100 || taxi.steps > 100 || police.steps > 100)
  clearInterval(interval)  

}, 400)

console.log('start')