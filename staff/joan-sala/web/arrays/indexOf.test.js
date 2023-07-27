describe('TEST indexOf')
const numbers = [0, 10, 20, 30, 40, 30, 20, 10, 0]

// RESULTADO: 2
// describe('CASE without start index')
// const indexOfResult = indexOf(numbers, 20)
// console.log(indexOfResult)

// RESULTADO: 2
// describe('CASE without start index 3')
// const indexOfResult = indexOf(numbers, 20, 3)
// console.log(indexOfResult)

//RESULTADO: 0
// describe('CASE without start index 8')
// const indexOfResult = indexOf(numbers, 0, 8)
// console.log(indexOfResult)

//RESULTADO: nada
describe('CASE not found')
const indexOfResult = indexOf(numbers, 80)
console.log(indexOfResult)