describe("TEST reduce");

describe("CASE with numbers");

const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
function sumAll(acumulator, currentValue) {
  return acumulator + currentValue;
}

console.log(numbers2.reduce(sumAll));

function mullAll(acumulator, currentValue) {
  return acumulator * currentValue;
}

console.log(numbers2.reduce(mullAll));
