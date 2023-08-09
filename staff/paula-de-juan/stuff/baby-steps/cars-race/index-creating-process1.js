let steps= 0

const interval = setInterval(() => {

    console.log(' '.repeat(steps + 'Car'))
    console.log(' '.repeat(steps) + 'Bus')
    console.log(' '.repeat(steps) + 'Taxi')

    if (steps === 100){
        clearInterval(interval)
    }
    console.log('steps'+steps)

}, 350)

console.log('start')



