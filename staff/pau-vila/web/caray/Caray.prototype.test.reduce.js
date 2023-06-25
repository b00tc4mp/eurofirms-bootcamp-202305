const arrayReduce = new Caray(10, 20, 30, 40, 50, 60)

const callback = (accumulator, currentValue ) => accumulator + currentValue

const resultReduce = arrayReduce.reduce(callback, 0)
console.log(resultReduce)
console.log(arrayReduce)

//multiplicar

const callback2 = (accumulator, currentValue ) => accumulator * currentValue

const resultReduce2 = arrayReduce.reduce(callback2, 1)
console.log(resultReduce2)
console.log(arrayReduce)

const callback3 = (accumulator, currentValue ) => accumulator + currentValue

const resultReduce3 = arrayReduce.reduce(callback3)
console.log(resultReduce3)
console.log(arrayReduce)

