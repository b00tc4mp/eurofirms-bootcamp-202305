describe("TEST includes");

describe("CASE with numbers");

const numbers4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(includes(numbers4, 8)); /* true */
console.log(includes(numbers4, 3)); /* true */
console.log(includes(numbers4, -1)); /* false */
console.log(includes(numbers4, 830)); /* false */
console.log(includes(numbers4, 0)); /* true */
