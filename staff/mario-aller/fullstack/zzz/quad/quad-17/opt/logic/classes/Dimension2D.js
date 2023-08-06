const Dimension = require('./Dimension')

/* The Dimension2D class represents a 2D point with x and y coordinates, and provides methods for
transposing, adding, and checking if the point is within a specified area. */
class Dimension2D {
    constructor(xValue = 0n, yValue = 0n) {
        if (!(typeof xValue === 'number' || typeof xValue === 'bigint'))
            throw new Error('xValue isNaN in Dimension2D')
        if (!(typeof yValue === 'number' || typeof yValue === 'bigint'))
            throw new Error('yValue isNaN in Dimension2D')

        this.x = new Dimension(xValue)
        this.y = new Dimension(yValue)
    }
    // Return the transpose
    tr() {
        const trPos = new Dimension2D()
        trPos.x.value = this.y.value
        trPos.y.value = this.x.value
        return trPos
    }
    // Return the addition of pos to 'this'
    add(pos) {
        if (!(pos instanceof Dimension2D)) throw new Error('pos !Dimension2D in add')
        return new Dimension2D(this.x.value + pos.x.value, this.y.value + pos.y.value)
    }
    // Check if 'this' is between 'pos1' and 'pos2'
    intoArea(pos1, pos2) {
        if (!(pos1 instanceof Dimension2D)) throw new Error('pos1 !Dimension2D in intoArea')
        if (!(pos2 instanceof Dimension2D)) throw new Error('pos2 !Dimension2D in intoArea')

        return (
            this.x.value >= pos1.x.value &&
            this.x.value <= pos2.x.value &&
            this.y.value >= pos1.y.value &&
            this.y.value <= pos2.y.value
        )
    }
}

module.exports = Dimension2D