//$ node lower john lennon

const name = process.argv[2]
const surname = process.argv[3]
const text = name + ' ' + surname

console.log('Hello, ' + text.toLowerCase())