describe("TEST flat");

describe("CASE numbers");

const numbers = new Caray(10, 20, 30, 40, new Caray(50, 60, 70));
console.log(numbers.flat()); /* [10, 20, 30, 40, 50, 60, 70] */

const numbers6 = new Caray(10, 20, new Caray(30, 40, new Caray(50, 60), 70));
console.log(numbers6.flat()); /* [10, 20, 30, 40, [50, 60], 70] */

const numbers3 = new Caray(10, 20, new Caray(30, 40, new Caray(50, 60), 70));
console.log(numbers3.flat(2)); /* [10, 20, 30, 40, 50, 60, 70] */

const numbers4 = new Caray(
  10,
  new Caray(20, new Caray(30, new Caray(40, new Caray(50, new Caray(60, 70)))))
);
console.log(numbers4.flat(2));

const numbers5 = new Caray(
  10,
  new Caray(20, new Caray(30, new Caray(40, new Caray(50, new Caray(60, 70)))))
);
console.log(numbers5.flat(Infinity)); /* [10, 20, 30, 40, 50, 60, 70] */
