function Transport(type) {
    this.type = type
}

Transport.GROUND = 0
Transport.MARINE = 1
Transport.AIR = 2

// overrides Object.prototype.toString
Transport.prototype.toString = function () {
    return 'Transport (type ' + this.type + ')'
}


var taxi = new Transport(Transport.GROUND)


console.log(taxi.toString())
// VM486: 16 Transport(type 0)