describe("TEST reduce");

describe("CASE with numbers add");

const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

function sumAll(acumulator, currentValue){
    return acumulator + currentValue
}
console.log(numbers2.reduce(sumAll))

describe("CASE with numbers add");

const numbers3 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

function nullAll(acumulator, currentValue){
    return acumulator + currentValue
}
console.log(numbers3.reduce(nullAll)) 