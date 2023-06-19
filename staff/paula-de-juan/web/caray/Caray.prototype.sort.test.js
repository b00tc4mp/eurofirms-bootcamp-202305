describe('TEST SORT')

const numbers = new Caray( 15, 4, 50, 67, 320, 10, 405, 70)

const result = numbers.sort()

console.log(numbers)
console.log(result)

const months = new Caray('March', 'January', 'February', 'December')

const result2 = months.sort()

const array3 = new Caray(20, 23, 5, 1, 47, 71, 100)

const numbersOrder = (a, b) => {return a-b}

const result3 = array3.sort(numbersOrder)

console.log(array3)

console.log(result3)

/* 
Caray.prototype.sort = function (callback) {
    if (callback){
        const 
    }
}
*/