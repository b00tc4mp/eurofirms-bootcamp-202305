// Dimension
function Dim(value = 0n) {
    if (isNaN(value)) {
        errorShow('Dim no soporta NaN')
        return null
    }
    this.value = BigInt(value)
}

// Item
function Item(width, height) {
    this.xSize = new Dim(width)
    this.ySize = new Dim(height)
}

// Conjunto de Items
function ItemsBlock(...Items) {
    this.list = []
    if (Items !== undefined) Items.forEach (item => this.list.push(item))
}

ItemsBlock.prototype.add = function (item) {
    if (!(item instanceof Item)) {
        errorShow('ItemsBlock no soporta !Item')
        return null
    }
    this.list.push(item)
}

// Panel
function Panel(width, height) {
    this.xMax = new Dim(width)
    this.yMax = new Dim(height)

}
