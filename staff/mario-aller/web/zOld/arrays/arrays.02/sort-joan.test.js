describe ('TEST sor')

const array = [20, 67, 40, 320, 10, 405, 70]

const result = sort(array)

console.log(array)
console.log(result)

const array2 = ['March', 'Jan', 'Feb', 'Dec']

const result2 = sort(array2)

console.log(array2)
console.log(result2)


const array3 = [10, 2, 30, 5, 4, 90, 54, 9]

const numbersOrder = (a,b) => {return a-b}

const result3 = sort(array3, numbersOrder)

console.log(result3)
console.log(array3)