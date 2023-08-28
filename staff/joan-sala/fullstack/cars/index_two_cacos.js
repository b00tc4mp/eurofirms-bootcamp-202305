function Car(icon, steps = 0) {
    this.icon = icon
    this.steps = steps
    this.stopped = false
}
Car.prototype.render = function () {
    console.log(' '.repeat(this.steps) + this.icon)
}

function randomStep() {

    return Math.floor(Math.random() * 10)
}
const carThief2 = new Car('Ladron2', 10)
const carThief = new Car('Ladron', 15)
const carTaxi = new Car('Taxi', 0)
const carPolice = new Car('Policia', 0)

let thiefsCaughts = 0

const interval = setInterval(() => {
    console.clear()

    console.log(' '.repeat(100) + 'bandera')
    carThief.render()
    carPolice.render()
    carTaxi.render()
    carThief2.render()

    if (carPolice.steps >= carThief2.steps && !carThief2.stopped) {
        thiefsCaughts++
        carThief2.stopped = true
    }
   
    //si poli mayor que labrón atrapado sigue contando
    if (carPolice.steps >= carThief.steps && !carThief.stopped) {
        thiefsCaughts++
        carThief.stopped = true
    }
     //con ternarios
     thiefsCaughts === 1 ? console.log('El policia ha atrapado al primer ladron') : 
     thiefsCaughts === 2 ? console.log('El policia ha atrapado al otro ladron') : null
 
    //si poli llega a atrapar un caco
    if (carTaxi.steps >= 100 || carPolice.steps >= 100 || carThief.steps >= 100) {
        clearInterval(interval)

        const maxValue = Math.max(carThief.steps, carTaxi.steps, carPolice.steps)

        switch (maxValue) {
            case carThief.steps: console.log('El que ganó la carrera fue el ladrón')
                break;
            case carTaxi.steps: console.log('El que ganó la carrera fue el taxi')
                break;
            case carPolice.steps: console.log('El que ganó la carrera fue el coche de policia')
                break;
            default: console.log('Error')
        }
    }

    if (!carThief.stopped)
        carThief.steps += randomStep()

    if (!carThief2.stopped)
        carThief2.steps += randomStep()

    
    
    //cuando atrapa a los 2 
    if(thiefsCaughts < 2)
        carPolice.steps += randomStep()+1

    carTaxi.steps += randomStep()

}, 500)