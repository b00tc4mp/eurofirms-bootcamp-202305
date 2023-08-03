/**
 * The above code defines a JavaScript class called Dimension, which represents a numerical value and
 * provides methods to check if the value is negative or greater than or equal to 2.
 * @param [value=0] - The value parameter is a number that represents the value of the Dimension.
 */
function Dimension(value = 0n) {
    if (!(typeof value === 'number' || typeof value === 'bigint')) throw new Error('value isNaN in Dimension')

    this.val = BigInt(value)
}
// Return a number with the value of dimension
Dimension.prototype.value = function () {
    return Number(this.val)
}
// Check if dimension is negative
Dimension.prototype.isNegative = function () {
    return (this.value < 0)
}
// Check if dimesion if bigger or equal to 2
Dimension.prototype.isValid2 = function () {
    return (BigInt(this.val) >= 2)
}
/**
 * The above code defines a JavaScript class called Dimension2D that represents a 2D coordinate with x
 * and y values, and provides methods for transposing the coordinates, adding two coordinates, and
 * checking if a coordinate is within a defined area.
 * @param [xValue=0] - The x-coordinate value of the Dimension2D object. It represents the horizontal
 * position of the point in a 2D space.
 * @param [yValue=0] - The `yValue` parameter is the value of the y-coordinate for the 2D dimension. It
 * represents the vertical position of a point in the 2D space.
 */
function Dimension2D(xValue = 0n, yValue = 0n) {
    if (!(typeof xValue === 'number' || typeof xValue === 'bigint'))
        throw new Error('xValue isNaN in Dimension2D')
    if (!(typeof yValue === 'number' || typeof yValue === 'bigint'))
        throw new Error('yValue isNaN in Dimension2D')

    this.x = new Dimension(xValue)
    this.y = new Dimension(yValue)
}
// Return the transpose
Dimension2D.prototype.tr = function () {
    const trPos = new Dimension2D()
    trPos.x.val = this.y.val
    trPos.y.val = this.x.val
    return trPos
}
// Return the addition of pos to 'this'
Dimension2D.prototype.add = function (pos) {
    if (!(pos instanceof Dimension2D)) throw new Error('pos !Dim 2 in add')

    return new Dimension2D(this.x.val + pos.x.val, this.y.val + pos.y.val)
}
// Check if 'this' is between 'pos1' and 'pos2'
Dimension2D.prototype.intoArea = function (pos1, pos2) {
    if (!(pos1 instanceof Dimension2D)) throw new Error('pos1 !Dimension2D in intoArea')
    if (!(pos2 instanceof Dimension2D)) throw new Error('pos2 !Dimension2D in intoArea')

    return (
        this.x.val > pos1.x.val &&
        this.x.val < pos2.x.val &&
        this.y.val > pos1.y.val &&
        this.y.val < pos2.y.val
    )
}

module.exports = { Dimension, Dimension2D }