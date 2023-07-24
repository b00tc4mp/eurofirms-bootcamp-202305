// -------------------
// Paneles
// -------------------

function Panel(width, height) {
    this.size = new Dim2(width, height)
    this.list = []
}
// Mira en el panel si 'pos' está libre u ocupada
Panel.prototype.posFree = function (pos) {
    if (!pos instanceof Dim2) errorShow('pos !Dim2 en vertex')

    // Limites del panel
    const origin = new Dim2(0, 0)
    if (!pos.intoArea(origin, this.size)) return false

    // Comprobamos si coincide con otro item puesto
    const intoItem = this.list.some(function (blP) {
        if (!(blP instanceof BlockPlaced))
            error('item !ItemPlaced en vertex')
        let posEnd

        if (blP.rotated)
            posEnd = blP.pos.add(blP.block.size.tr())
        else
            posEnd = blP.pos.add(blP.block.size)

        return pos.intoArea(blP.pos, posEnd)
    })

    return !intoItem
}
// Mira si el cuadrante 'quad' de 'pos' está libre
Panel.prototype.QuaFree = function (pos, quad) {
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
            errorShow('El cuadrante no es valido')
    }
    return Panel.posFree(vert)
}

Panel.QUADRANT_I = 1
Panel.QUADRANT_II = 2
Panel.QUADRANT_III = 3
Panel.QUADRANT_IV = 4

module.exports = Panel