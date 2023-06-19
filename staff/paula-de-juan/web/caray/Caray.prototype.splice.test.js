describe("TEST Caray splice");

describe("CASE with numbers");

console.log('[10, 20, 30, 40, 50, 60, 70, 80, 90]')
const numbers = new Caray(10, 20, 30, 40, 50, 60, 70, 80, 90);
const result = numbers.splice(1, 2);

console.log('numbers, splice(1, 2)')
console.log(result);
console.log(numbers);

const numbers2 = new Caray(10, 20, 30, 40, 50, 60, 70, 80, 90);
const result2 = numbers2.splice(3, 0, 100, 200);
console.log('numbers2.splice(3, 0, 100, 200)')
console.log(result2);
console.log(numbers2);

const numbers3 = new Caray(10, 20, 30, 40, 50, 60, 70, 80, 90);
const result3 = numbers3.splice(3, 2, 100, 200);
console.log('numbers3.splice(3, 2, 100, 200)')
console.log(result3);
console.log(numbers3);

const numbers4 = new Caray(10, 20, 30, 40, 50, 60, 70, 80, 90);
const result4 = numbers4.splice(3, 2, 100, 200, 300, 400);
console.log('numbers4.splice(3, 2, 100, 200, 300, 400)')
console.log(result4);
console.log(numbers4);

const numbers5 = new Caray(10, 20, 30, 40, 50, 60, 70, 80, 90);
const result5 = numbers5.splice(-3, 0, 100, 200);
console.log('numbers5.splice(-3, 0, 100, 200)')
console.log(result5);
console.log(numbers5);

const numbers6 = new Caray(10, 20, 30, 40, 50, 60, 70, 80, 90);
const result6 = numbers6.splice(-40);
console.log('numbers6.splice(-40)')
console.log(result6);
console.log(numbers6);


