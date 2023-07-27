/**
 * The above code defines a JavaScript class called Dimension, which represents a numerical value and
 * provides methods to check if the value is negative or greater than or equal to 2.
 * @param [value=0] - The value parameter is a number that represents the value of the Dimension.
 */
class Dimension {
    constructor(value = 0n) {
        if (!(typeof value === 'number' || typeof value === 'bigint')) throw new Error('value isNaN in Dimension')

        this.val = BigInt(value)
    }
    // Return a number with the value of dimension
    value() {
        return Number(this.val)
    }
    // Check if dimension is negative
    isNegative() {
        return (this.value < 0)
    }
    // Check if dimension if bigger or equal to 2
    isValid2() {
        return (BigInt(this.val) >= 2)
    }
}

module.exports = Dimension