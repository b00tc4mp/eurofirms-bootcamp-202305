describe(' TEST splice ')

describe(' CASE replace 1 element in array ')

const nums = [10, 20, 30, 100, 50, 60]

const removedNums = splice(nums, 3, 1, 40)

console.log(removedNums)
//[100]

console.log(nums)
// [10, 20, 30, 40, 50, 60]

describe(' CASE replace 3 elements by 1 in array ')

const colors = ['red', 'green', 'blue', 'violet', 'brown', 'black', 'orange', 'pink']

const removedColors = splice(colors, 2, 3, 'white')

console.log(removedColors)
// ['blue', 'violet', 'brown']

console.log(colors)
// ['red', 'green', 'white', 'black', 'orange', 'pink']

describe(' CASE replace 3 elements by 2 in array ')

{
    const cars = ['fiat', 'renault', 'ferrari', 'volvo', 'seat', 'porsche']

    const removedCars = splice(cars, 2, 3, 'maseratti', 'bugatti')

    console.log(removedCars)
    // ['ferrari', 'volvo', 'seat']

    console.log(cars)
    // ['fiat', 'renault', 'maseratti', 'bugatti', 'porsche']
}

describe(' CASE replace 3 elements by 3 in array ')

{
    const cars = ['fiat', 'renault', 'ferrari', 'volvo', 'seat', 'porsche']

    const removedCars = splice(cars, 2, 3, 'maseratti', 'bugatti', 'audi')

    console.log(removedCars)
    // ['ferrari', 'volvo', 'seat']

    console.log(cars)
    // ['fiat', 'renault', 'maseratti', 'bugatti', 'audi', 'porsche']
}

describe(' CASE replace 3 elements by 4 in array ')

{
    const cars = ['fiat', 'renault', 'ferrari', 'volvo', 'seat', 'porsche', 'lamborghini']

    const removedCars = splice(cars, 2, 3, 'maseratti', 'bugatti', 'audi', 'bmw')

    console.log(removedCars)
    // ['ferrari', 'volvo', 'seat']

    console.log(cars)
    // ['fiat', 'renault', 'maseratti', 'bugatti', 'audi', 'bmw','porsche', 'lamborghini']
}

describe(' CASE replace 3 elements by 6 in array ')

{
    const cars = ['fiat', 'renault', 'ferrari', 'volvo', 'seat', 'porsche', 'lamborghini']

    const removedCars = splice(cars, 2, 3, 'maseratti', 'bugatti', 'audi', 'bmw', 'tesla', 'ford')

    console.log(removedCars)
    // ['ferrari', 'volvo', 'seat']
}