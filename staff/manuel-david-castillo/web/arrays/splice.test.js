describe("TEST splice");

describe("CASE with numbers");

describe("CASE 1");
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result = splice(numbers, 1, 2);
console.log(result); /* [20, 30] */
console.log(numbers); /* [10, 40, 50, 60, 70, 80, 90] */

describe("CASE 2");
const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result2 = splice(numbers2, 3, 0, 100, 200);
console.log(result2); /* [] */
console.log(numbers2); /* [10, 20, 30, 100, 200, 40, 50, 60, 70, 80, 90] */

describe("CASE 3");
const numbers3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result3 = splice(numbers3, 3, 2, 100, 200);
console.log(result3); /* [40, 50] */
console.log(numbers3); /* [10, 20, 30, 100, 200, 60, 70, 80, 90] */

describe("CASE 4");
const numbers4 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result4 = splice(numbers4, 3, 2, 100, 200, 300, 400);
console.log(result4); /* [40, 50] */
console.log(numbers4); /* [10, 20, 30, 100, 200, 300, 400, 60, 70, 80, 90] */

describe("CASE 5");
const numbers5 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result5 = splice(numbers5, -3, 0, 100, 200);
console.log(result5); /* [] */
console.log(numbers5); /* [10, 20, 30, 40, 50, 60, 100, 200, 70, 80, 90] */

describe("CASE 6");
const numbers6 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result6 = splice(numbers6, -3, 4, 100, 200);
console.log(result6); /* [70, 80, 90] */
console.log(numbers6); /* [10, 20, 30, 40, 50, 60, 100, 200] */

describe("CASE 7");
const numbers7 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result7 = splice(numbers7, -20, 4, 100, 200);
console.log(result7); /* [10, 20, 30, 40] */
console.log(numbers7); /* [100, 200, 50, 60, 70, 80, 90] */

describe("CASE 8");
const numbers8 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result8 = splice(
  numbers8,
  -20,
  Infinity,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000
);
console.log(result8); /* [10, 20, 30, 40, 50, 60, 70, 80, 90] */
console.log(numbers8); /* [100, 200, 50, 60, 70, 80, 90] */

describe("CASE 9");
const numbers9 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const result9 = splice(numbers9, 40);
console.log(result9); /* [40, 50, 60, 70, 80, 90] */
console.log(numbers9); /* [10, 20, 30] */
