describe(' test SORT ')

describe(' CASE sort by first numbers (of each number)')

const numbers = new Caray(20, 67, 40, 320, 10, 405, 70)

const result = numbers.sort()

console.log(result)
console.log(numbers)

describe(' CASE sort by letter')
const array2 = new Caray('March', 'Jan', 'Feb', 'Dec')

const result2 = array2.sort()

console.log(array2)
console.log(result2)

describe(' CASE order from minor to highest value')
const array3 = new Caray(10, 2, 30, 5, 4, 90, 54, 9)

const numbersOrder = (a,b) => {return a-b}

const result3 = array3.sort( numbersOrder)

console.log(result3)
console.log(array3)

describe(' CASE order from highest to minor value')
const array4 = new Caray(10, 2, 30, 5, 4, 90, 54, 9)

const numbersOrder2 = (a,b) => {return b-a}

const result4 = array4.sort( numbersOrder2)

console.log(result4)
console.log(array4)

describe(' CASE order with name alfabetic')

const objectsArray = new Caray (
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
);

  const result5 = objectsArray.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  console.log(result5)
  console.log(objectsArray)

  describe(' CASE order with value')

  const objectsArray2 = new Caray (
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
);

  const result6 = objectsArray2.sort((a, b) => {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  console.log(result6)
  console.log(objectsArray2)

  
