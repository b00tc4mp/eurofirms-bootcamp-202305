const who = [
    'mami',
    'papi',
    'bro',
    'sista',
    'bebe',
    'nena',
    'nene'
]

const part1 = [
    'ya tu sabe',
    'mueve tu cucu',
    'dale el perreo'
]

const part2 = [
    'me guta',
    'me pone',
    'como goso'
]

const part3 = [
    'la gasolina',
    'la botella',
    'el yoyo',
    'el piyama',
    'el chupon',
    'la moto'
]

function getRandom(strings) {
    const randomIndex = Math.floor(Math.random() * strings.length)

    const string = strings[randomIndex]

    return string
}

const text = getRandom(who) + ', ' + getRandom(part1) + ', ' + getRandom(part2) + ' ' + getRandom(part3)

console.log(text)