// -------------------
// Paneles
// -------------------

function Panel(width, height) {
    this.size = new Dim2(width, height)
    this.list = []
}

// Mira si es valido en cuadrante 'quad' del vertice en 'pos'
Panel.prototype.vertex = function (pos, quad = 1) {
    if (!pos instanceof Dim2) errorShow('pos !Dim2 en vertex')
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

    // Limites del panel
    const origin = new Dim2(0, 0)
    if (!vert.intoArea(origin, this.size)) return false

    // Comprobamos si coincide con otro item puesto
    const intoItem = this.list.some(function (blockP) {
        if (!(blockP instanceof BlockPlaced)) error('item !ItemPlaced en vertex')
        let posEnd

        if (blockP.rotated) posEnd = blockP.pos.add(blockP.block.size.transposed())
        else posEnd = blockP.pos.add(blockP.block.size)

        return vert.intoArea(blockP.pos, posEnd)
    })

    return !intoItem
}
