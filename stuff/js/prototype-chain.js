/**
 * Human
 */

function Human(name) {
    this.name = name
}

// Human.prototype = new Object()
// Human.prototype.constructor = Human

// Human.prototype = { constructor: Human }

Human.prototype.salute = function (to) {
    console.log(this.name + ': Hello, ' + to + '!')
}

/**
 * Woman
 */

function Woman(name) {
    Human.call(this, name)
}

Woman.prototype = new Human()
Woman.prototype.constructor = Woman

Woman.prototype.giveBirth = function () {
    console.log('👶🏼')
}

/**
 * Man
 */

function Man(name) {
    Human.call(this, name)
}

Man.prototype = new Human()
Man.prototype.constructor = Man

Man.prototype.giveSperm = function () {
    console.log('🤍')
}


// test

var peter = new Man('Peter')
peter.salute('Wendy')

var wendy = new Woman('Wendy')
wendy.salute('Peter')

peter.giveSperm()
wendy.giveBirth()

// VM3660: 15 Peter: Hello, Wendy!
// VM3660: 15 Wendy: Hello, Peter!
// VM3660: 45 🤍
// VM3660: 30 👶🏼

wendy.giveSperm()
// VM3702: 1 Uncaught TypeError: wendy.giveSperm is not a function
//     at<anonymous>: 1: 7
//         (anonymous) @VM3702: 1
peter.giveBirth()
// VM3733: 1 Uncaught TypeError: peter.giveBirth is not a function
//     at<anonymous>: 1: 7