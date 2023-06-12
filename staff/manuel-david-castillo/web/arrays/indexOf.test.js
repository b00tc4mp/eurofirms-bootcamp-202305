describe("TEST indexOf");

const numbers = [0, 10, 20, 30, 40, 30, 20, 10, 0];

describe("CASE without start index");
const indexOfResult = indexOf(numbers, 20);
console.log(indexOfResult);

describe("CASE with start index 3");
const indexOfResult2 = indexOf(numbers, 20, 3);
console.log(indexOfResult2);

describe("CASE with start index 8");
const indexOfResult3 = indexOf(numbers, 0, 8);
console.log(indexOfResult3);

describe("CASE not found");
const indexOfResult4 = indexOf(numbers, 80);
console.log(indexOfResult4);
