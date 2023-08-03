// -------------------
// Dimensiones
// -------------------

function Dim(value = 0n) {
    if (value === undefined) this.val = 0n
    this.val = BigInt(value)
}

// Borra un dato
Dim.prototype.kill = function () {
    delete this.val
}

Dim.prototype.isNegative = function () {
    if (this.value < 0n) return true
    return false
}

Dim.prototype.isValid2 = function () {
    if (BigInt(this.val) >= 2n) return true
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
Dim2.prototype.kill = function () {
    delete this.x.val
    delete this.y.val
    delete this.x
    delete this.y
}

// Da la traspuesta de una coordenada
Dim2.prototype.tr = function () {
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
