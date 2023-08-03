const Dimension2D = require('./Dimension2D')
const Block = require('./Block')

/* The `Panel` class represents a panel with a reference, owner, size, blocks, and status, and provides
methods to check if a position is free, if all blocks are placed, and if a quadrant is free. */
class Panel {
    constructor(reference, owner, width, height, blocks, status) {
        if (!(typeof width === 'number' || typeof width === 'bigint')) throw new Error('width isNaN in Panel')
        if (!(typeof height === 'number' || typeof height === 'bigint')) throw new Error('height isNaN in Panel')

        this.reference = reference
        this.owner = owner
        this.size = new Dimension2D(width, height)
        this.blocks = blocks
        this.status = status
    }
    // Check if 'pos' is free in the panel
    posFree(pos) {
        if (!(pos instanceof Dimension2D)) throw new Error('pos !Dimension2 in posFree')

        // Panel limits
        const origin = new Dimension2D(0, 0)
        if (!pos.intoArea(origin, this.size)) return false

        // Check if it is inside another item
        const intoItem = this.blocks.some(b => {
            if (b.isPlaced()) {
                const posEnd = b.orientation ? b.pos.add(b.size) : b.pos.add(b.size.tr())
                return pos.intoArea(b.pos, posEnd)
            } else { return false }
        })
        return !intoItem
    }
    // Check if all blocks are placed
    blocskPlacedAll() {
        return this.blocks.every(block => block.isPlaced())
    }
    // Check if quadrant 'quad' is free in 'pos'
    quadFree(pos, quad) {
        if (!(pos instanceof Dimension2D)) throw new Error('pos !Dimension2D in quadFree')
        if (typeof quad !== 'number') throw new Error('quad isNaN in quadFree')

        const vert = new Dimension2D(pos.x.value, pos.y.value)
        switch (quad) {
            case Panel.QUADRANT_I:
                vert.x.value++
                vert.y.value++
                break
            case Panel.QUADRANT_II:
                vert.x.value--
                vert.y.value++
                break
            case Panel.QUADRANT_III:
                vert.x.value--
                vert.y.value--
                break
            case Panel.QUADRANT_IV:
                vert.x.value++
                vert.y.value--
                break
            default:
                throw new Error('wrong quadrant')
        }
        return this.posFree(vert)
    }
}

Panel.QUADRANT_I = 1
Panel.QUADRANT_II = 2
Panel.QUADRANT_III = 3
Panel.QUADRANT_IV = 4

Panel.NOT_OPTIMIZED = 0
Panel.ON_PROGRESS = 1
Panel.FINISHED = 2


module.exports = Panel