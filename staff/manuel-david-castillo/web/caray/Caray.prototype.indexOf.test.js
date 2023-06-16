describe("TEST indexOf");

describe("CASE with numbers");

const numbers5 = new Caray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(numbers4.indexOf(8)); /* 8 */
console.log(numbers4.indexOf(3)); /* 3 */
console.log(numbers4.indexOf(-1)); /* -1 */
console.log(numbers4.indexOf(830)); /* -1 */
console.log(numbers4.indexOf(0)); /* 0 */
console.log(numbers4.indexOf(0, 3)); /* -1 */
console.log(numbers4.indexOf(5, 6)); /* -1 */
