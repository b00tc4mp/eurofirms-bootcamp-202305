describe('TEST slice')

const array = [10, 20, 30, 40, 50, 60]

const result = slice(array, 2)
console.log(result) // [30, 40, 50, 60]

const result2 = slice(array, 2, 4)
console.log(result2) // [30, 40]

const result3 = slice(array, 0, 10)
console.log(result3) // [10, 20, 30, 40, 50, 60]

const result4 = slice(array, 5, 3)
console.log(result4) // []

const result5 = slice(array)
console.log(result5) // [10, 20, 30, 40, 50, 60]

const result6 = slice(array, -2)
console.log(result6) // [50, 60]

const result7 = slice(array, -4, -1)
console.log(result7) // [30, 40, 50]

const result8 = slice(array, -20, -1)
console.log(result8) // TODO