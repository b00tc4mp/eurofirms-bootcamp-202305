const Dimension2D = require('./Dimension2D')
const Block = require('./Block')

/* The Panel class represents a panel with blocks that can be placed on it, and provides methods to
check if positions and quadrants are free, and to calculate the maximum height and width of the
panel. */
class Panel {
    constructor(id, reference, owner, width, height, blocks, status) {
        if (!(typeof width === 'number' || typeof width === 'bigint')) throw new Error('width isNaN in Panel')
        if (!(typeof height === 'number' || typeof height === 'bigint')) throw new Error('height isNaN in Panel')

        this.id = id
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

        // Check if it is inside any placed block
        const intoBlock = this.blocks.some(block => {
            if (block.isPlaced()) {
                const posEnd = (block.orientation === 0) ? block.pos.add(block.size) : block.pos.add(block.size.tr())
                // console.log('blockpos', block.pos.x.value, '-', block.pos.y.value)
                // console.log('posEnd', posEnd.x.value, '-', posEnd.y.value)
                // const d = pos.intoArea(block.pos, posEnd)
                // console.log('pos', pos.x.value, '-', pos.y.value,'>',d)
                if (pos.intoArea(block.pos, posEnd)) return true
            }
            return false
        })
        return !intoBlock
    }
    // Check if all blocks are placed
    blocskPlacedAll() {
        return this.blocks.every(block => block.isPlaced())
    }
    // Check if quadrant 'quad' is free in 'pos'
    quadFree(pos, quad) {
        if (!(pos instanceof Dimension2D)) throw new Error('pos !Dimension2D in quadFree')
        if (typeof quad !== 'number') throw new Error('quad isNaN in quadFree')

        const vertex = new Dimension2D(pos.x.value, pos.y.value)
        switch (quad) {
            case Panel.QUADRANT_I:
                vertex.x.value++
                vertex.y.value++
                break
            case Panel.QUADRANT_II:
                vertex.x.value--
                vertex.y.value++
                break
            case Panel.QUADRANT_III:
                vertex.x.value--
                vertex.y.value--
                break
            case Panel.QUADRANT_IV:
                vertex.x.value++
                vertex.y.value--
                break
            default:
                throw new Error('wrong quadrant')
        }
        return this.posFree(vertex)
    }
    // Return de max height of a panel
    heightMax() {
        let height = 0n
        this.blocks.forEach((block => {
            if (block.isPlaced()) {
                const heightBlock = (block.orientation === 0) ? block.size.y.value : block.size.x.value
                if (block.pos.y.value + heightBlock > height) height = block.pos.y.value + heightBlock
            }
        }))
        return height
    }
    // Return de max width of a panel
    widthMax() {
        let width = 0n
        this.blocks.forEach((block => {
            if (block.isPlaced()) {
                const widthBlock = (block.orientation === 0) ? block.size.x.value : block.size.y.value
                if (block.pos.x.value + widthBlock > width) width = block.pos.x.value + widthBlock
            }
        }))
        return width
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