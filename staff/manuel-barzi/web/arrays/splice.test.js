describe('TEST splice')

describe('CASE replace 1 element in array')

const nums = [10, 20, 30, 100, 50, 60]

const removedNums = splice(nums, 3, 1, 40)

console.log(removedNums)
//[100]

console.log(nums)
// [10, 20, 30, 40, 50, 60]

describe('CASE replace 2 elements by 1 in array')

const colors = ['red', 'green', 'blue', 'violet', 'brown', 'black']

const removedColors = splice(colors, 2, 3, 'white')

console.log(removedColors)
// ['blue', 'violet', 'brown']

console.log(colors)
// ['red', 'green', 'white', 'black']


