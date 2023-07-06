describe("TEST includes");

describe("CASE with numbers");

const numbers4 = new Caray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(numbers4.includes(8)); /* true */
console.log(numbers4.includes(3)); /* true */
console.log(numbers4.includes(-1)); /* false */
console.log(numbers4.includes(830)); /* false */
console.log(numbers4.includes(0)); /* true */
console.log(numbers4.includes(0, 3)); /* false */
console.log(numbers4.includes(5, 6)); /* false */
