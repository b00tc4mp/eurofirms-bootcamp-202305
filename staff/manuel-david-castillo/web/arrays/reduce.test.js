describe("TEST reduce");

describe("CASE with numbers");

const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
function sumAll(acumulator, currentValue) {
  return acumulator + currentValue;
}

console.log(reduce(numbers2, sumAll));

console.log(reduce(numbers2, sumAll, 200));

const numbers3 = [10, 20, 30, 40];
function mullAll(acumulator, currentValue) {
  return acumulator * currentValue;
}

console.log(reduce(numbers3, mullAll));
