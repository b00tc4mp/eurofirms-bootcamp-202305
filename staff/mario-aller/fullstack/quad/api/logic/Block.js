const { Dim, Dim2 } = require('./Dim')

// -------------------
// Bloques
// -------------------

function Block(width, height, rotated, pos) {
    if (!(pos instanceof Dim2)) throw new Error('pos !Dim 2 in block')
    if (!width.isValid2() || !height.isValid2()) throw new Error('block size wrong')

    Block.idCounter++
    this.id = Block.idCounter.toString()
    this.size = new Dim2(width, height)
    this.rotated = rotated ? true : false
    this.pos = pos ? new Dim2(pos.x.val, pos.y.val) : new Dim2(-1, -1)
}

Block.idCounter = 0n

Block.REGULAR_POSITION = 0
Block.ROTATED_POSITION = 1

module.exports = Block