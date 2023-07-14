//$ node add 15 25
// EXPECTED OUTPUT: 40
const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])

const result = num1 + num2

console.log(result)