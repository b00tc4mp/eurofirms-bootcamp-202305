// -------------------
// Bloques
// -------------------

function Block(width, height) {
    const w = new Dim(width)
    const h = new Dim(height)
    if (!w.isValid2() || !h.isValid2()) return null

    this.id = ++Block.idCounter
    this.size = new Dim2(width, height)
}

Block.idCounter = 0n

// -------------------
// Bloque colocado
// -------------------

// 'pos' esquina inferior izquierda
function BlockPlaced(block, pos, rotated = 0) {
    if (!(pos instanceof Dim2)) errorShow('pos !Dim2 en BlockPlaced')
    if (!(block instanceof Block)) errorShow('block !Block en BlockPlaced')
    this.block = block
    this.rotated = rotated
    this.pos = pos
}

BlockPlaced.REGULAR_POSITION = 0
BlockPlaced.ROTATED_POSITION = 1

module.exports = { Block, BlockPlaced }