const { Dimension2D } = require('./Dimension')
const Block = require('./Block')
/**
 * The code defines a Panel class in JavaScript that represents a rectangular panel with a specified
 * width and height, and provides methods to check if a position or quadrant within the panel is free.
 * @param width - The `width` parameter represents the width of the panel. It should be a number value.
 * @param height - The `height` parameter in the `Panel` function represents the vertical dimension or
 * the height of the panel. It is used to define the size of the panel along the y-axis.
 */
function Panel(width, height) {
    if (typeof width !== 'number') throw new Error('width isNaN in Panel')
    if (typeof height !== 'number') throw new Error('height isNaN in Panel')

    this.owner = ''
    this.size = new Dimension2D(width, height)
    this.list = []
    this.optimize = false
}
// Check if 'pos' is free in the panel
Panel.prototype.posFree = function (pos) {
    if (!(pos instanceof Dimension2D)) throw new Error('pos !Dimension2 in posFree')

    // Panel limits
    const origin = new Dimension2D(0, 0)
    if (!pos.intoArea(origin, this.size)) return false

    // Check if it is inside another item
    const intoItem = this.list.some(block => {
        if (!(block instanceof Block)) throw new Error('list item !Block vertex')

        const posEnd = block.rotated ? block.pos.add(block.size) : block.pos.add(block.size.tr())
        return pos.intoArea(block.pos, posEnd)
    })

    return !intoItem
}
// Check if quadrant 'quad' is free in 'pos'
Panel.prototype.quadFree = function (pos, quad) {
    if (!(pos instanceof Dimension2D)) throw new Error('pos !Dimension2D in quadFree')
    if (typeof quad !== 'Number') throw new Error('quad isNaN in quadFree')

    const vert = new Dimension2D(pos.x.val, pos.y.val)
    switch (quad) {
        case 1:
            vert.x.val++
            vert.y.val++
            break
        case 2:
            vert.x.val--
            vert.y.val++
            break
        case 3:
            vert.x.val--
            vert.y.val--
            break
        case 4:
            vert.x.val++
            vert.y.val--
            break
        default:
            throw new Error('wrong quadrant')
    }
    return Panel.posFree(vert)
}

Panel.QUADRANT_I = 1
Panel.QUADRANT_II = 2
Panel.QUADRANT_III = 3
Panel.QUADRANT_IV = 4

module.exports = Panel