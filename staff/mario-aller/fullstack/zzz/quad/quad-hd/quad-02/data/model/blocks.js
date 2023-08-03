// -------------------
// Dimension
// -------------------

function Dim(value = 0n) {
    if (value === undefined) this.val = 0n
    this.val = BigInt(value)
}

// Borra un dato
// Dim.prototype.kill = function () {
//     delete this.val
// }

Dim.prototype.isNegative = function () {
    if (this.value < 0n) return true
    return false
}

function Dim2(xValue, yValue) {
    if (xValue === undefined && yValue === undefined) {
        this.x = new Dim()
        this.y = new Dim()
    }
    this.x = new Dim(xValue)
    this.y = new Dim(yValue)
}

// Borra un punto
// Dim2.prototype.kill = function () {
//     delete this.x.val
//     delete this.y.val
//     delete this.x
//     delete this.y
// }

// Da la traspuesta de una coordenada
Dim2.prototype.transposed = function () {
    const trPos = new Dim2()
    trPos.x.val = this.y.val
    trPos.y.val = this.x.val
    return trPos
}

// Devuelve la suma de dos puntos 'pos1' y 'pos22
Dim2.prototype.add = function (pos) {
    return new Dim2(this.x.val + pos.x.val, this.y.val + pos.y.val)
}

// Mira si un punto está en el area definida por 'pos1' y 'pos2'
Dim2.prototype.intoArea = function (pos1, pos2) {
    if (this.x.val > pos1.x.val &&
        this.x.val < pos2.x.val &&
        this.y.val > pos1.y.val &&
        this.y.val < pos2.y.val
    ) return true
    return false
}

// -------------------
// Bloque
// -------------------

function Block(width, height) {
    this.id = ++Block.idCounter
    this.size = new Dim2(width, height)
}
Block.idCounter = 0n

// -------------------
// Bloque colocado
// -------------------

function BlockPlaced(item, pos, rotated = false) {
    if (!(pos instanceof Dim2)) errorShow('pos !Dim2 en BlockPlaced')
    if (!(item instanceof Block)) errorShow('item !Item en BlockPlaced')
    this.block = item
    this.rotated = rotated
    // 'pos' esquina inferior izquierda
    this.pos = pos
}
BlockPlaced.REGULAR_POSITION = false
BlockPlaced.ROTATED_POSITION = true

// -------------------
// Panel
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
        
        if (blockP.rotated) posEnd = blockP.pos.add(blockP.size.transposed())
        else posEnd = blockP.pos.add(blockP.size)
        
        const flag = vert.intoArea(blockP.pos, posEnd)
        return flag
    })
    
    return !intoItem
}
