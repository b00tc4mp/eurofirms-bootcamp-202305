describe("TEST slice");

describe("CASE with numbers");

const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers3.slice(4)); /* [4, 5, 6, 7, 8, 9, 10] */
console.log(numbers3.slice(8)); /* [8, 9, 10] */
console.log(numbers3.slice(12)); /* [] */
console.log(numbers3.slice(3, 7)); /* [3, 4, 5, 6] */
console.log(numbers3.slice(-4, -1)); /* [7, 8, 9] */
console.log(numbers3.slice(-30)); /* [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */
