let steps = 0

const interval = setInterval(() => {
    console.clear()

    console.log(' '.repeat(steps) + '🚘')
    console.log(' '.repeat(steps) + '🚖')
    console.log(' '.repeat(steps) + '🚔')
    steps++

    if (steps === 100)
        clearInterval(interval)

    console.log('steps ' + steps)
}, 400)

console.log('start')