const Dimension2D = require('./Dimension2D')

/* The Block class represents a block with a position, size, and orientation, and provides a method to
check if the block is placed. */
class Block {
    constructor(x, y, width, height, orientation) {
        if (!(typeof x === 'number' || typeof x === 'bigint')) throw new Error('x isNaN in Block')
        if (!(typeof y === 'number' || typeof y === 'bigint')) throw new Error('y isNaN in Block')
        if (!(typeof width === 'number' || typeof width === 'bigint')) throw new Error('width isNaN in Block')
        if (!(typeof height === 'number' || typeof height === 'bigint')) throw new Error('height isNaN in Block')
        if (typeof orientation !== 'number') throw new Error('orientation isNaN in Block')

        this.pos = new Dimension2D(x, y)
        this.size = new Dimension2D(width, height)
        this.orientation = orientation
    }
    // Return if block is placed
    isPlaced() {
        return !this.pos.x.isNegative()
    }
}

Block.REGULAR = 0
Block.ROTATED90 = 1

module.exports = Block