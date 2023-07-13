function Caray(...elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]

        this[i] = element
    }

    this.length = elements.length
}

Caray.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        callback(element)
    }
}

Caray.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        const result = callback(element)

        if (result)
            return element
    }
}

Caray.prototype.push = function (...elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]

        const index = this.length

        this[index] = element

        this.length++
    }

    return this.length
}

Caray.prototype.pop = function () {
    if (!this.length)
        return undefined

    const index = this.length - 1

    const element = this[index]

    this.length--

    delete this[index]

    return element
}

/*
var c = new Caray()

c[0] = 10
c[1] = 20
c[2] = 30
c.length = 3
*/

var c = new Caray(10, 20, 30)

//c.forEach(element => console.log(element))

var d = new Caray(40, 50, 60, 70, 80, 90, 100)

//d.forEach(element => console.log(element))

var people = new Caray({ name: 'Pepito Grillo' }, { name: 'Wendy Darling' }, { name: 'Peter Pan' }, { name: 'James Hook' }, { name: 'Campa Nilla' })

//people.find(person => person.name === 'Peter Pan 2')

people.push({ name: 'King Kong' })

var kingKong = people.pop()



