const { Dim, Dim2 } = require('./Dim')
const Block = require('./Block')

// -------------------
// Paneles
// -------------------

function Panel(width, height) {
    this.size = new Dim2(width, height)
    this.list = []
}

// Mira en el panel si 'pos' está libre u ocupada
Panel.prototype.posFree = function (pos) {
    if (!pos instanceof Dim2) throw new Error('pos !Dim2 in vertex')

    // Limites del panel
    const origin = new Dim2(0, 0)
    if (!pos.intoArea(origin, this.size)) return false

    // Comprobamos si coincide con otro item puesto
    const intoItem = this.list.some(bl => {
        if (!(bl instanceof Block)) throw new Error('list item !Block vertex')

        const posEnd = bl.rotated ? bl.pos.add(bl.size) : bl.pos.add(bl.size.tr())
        return pos.intoArea(bl.pos, posEnd)
    })

    return !intoItem
}
// Mira si el cuadrante 'quad' de 'pos' está libre
Panel.prototype.quadFree = function (pos, quad) {
    if (!(pos instanceof Dim2)) throw new Error('pos !Dim 2 in quadFree')

    const vert = new Dim2(pos.x.val, pos.y.val)
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