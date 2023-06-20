describe(' TEST flat ')

describe(' CASE numbers ')

const numbers1 = new Caray(10, 20, 30, 40, 50, new Caray(50, 60, 70))
consol.log(numbers1.flat()) // [10, 20, 30, 40, 50, 60, 70]

const numbers2 = new Caray(10, 20, new Caray(30, 40, new Caray8(50, 60), 70))
consol.log(numbers2.flat()) // [10, 20, 30, 40, [50, 60], 70]

const numbers3 = new Caray(10, 20, new Caray(30, 40, new Caray8(50, 60), 70))
consol.log(numbers3.flat(2)) // [10, 20, 30, 40, 50, 60, 70]

const number4 = new Caray((10, new Caray(20, new Caray(30, new Caray(40, new Caray(50, new Caray(60, 70)))))))
consol.log(numbers4.flat(2)) 

const number5 = new Caray((10, new Caray(20, new Caray(30, new Caray(40, new Caray(50, new Caray(60, 70)))))))
consol.log(numbers5.flat(Infinity)) // [10, 20, 30, 40, 50, 60, 70]