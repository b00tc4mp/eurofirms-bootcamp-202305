const labyrinth =
    [
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
    ]
const ppal = function (lab) {

    const copyLab = function (lab) {
        const lab2 = []
        const numFil = lab.length
        const numCol = lab[0].length

        for (let i = 0; i < numFil; i++) {
            const fil = []
            for (let j = 0; j < numCol; j++)
                fil.push(lab[i][j])
            lab2.push(fil)
        }
        return lab2
    }

    const validateCoor = function (lab, x, y) {
        const numFil = lab.length
        const numCol = lab[0].length

        if ((x >= 0 && x < numFil)
            && (y >= 0 && y < numCol))
            return true
        return false
    }

    const cep = function (lab, x, y) {
        let value

        // right
        x++
        if (validateCoor(lab, x, y)) {
            value = lab[x][y]
            if (value === 'E') return true
            if (value !== 'W' && value !== 'X') {
                lab[x][y] = 'X'
                if (cep(copyLab(lab), x, y)) return true
            }
        }
        // left
        x -= 2
        if (validateCoor(lab, x, y)) {
            value = lab[x][y]
            if (value === 'E') return true
            if (value !== 'W' && value !== 'X') {
                lab[x][y] = 'X'
                if (cep(copyLab(lab), x, y)) return true
            }
        }
        // up
        x++
        y++
        if (validateCoor(lab, x, y)) {
            value = lab[x][y]
            if (value === 'E') return true
            if (value !== 'W' && value !== 'X') {
                lab[x][y] = 'X'
                if (cep(copyLab(lab), x, y)) return true
            }
        }
        // down
        y -= 2
        if (validateCoor(lab, x, y)) {
            value = lab[x][y]
            if (value === 'E') return true
            if (value !== 'W' && value !== 'X') {
                lab[x][y] = 'X'
                if (cep(copyLab(lab), x, y)) return true
            }
        }
        return false
    }


    const numFil = lab.length
    const numCol = lab[0].length
    let i, j

    for (i = 1; i < numFil; i++)
        if (lab[i].length !== numCol) throw new Error('Labyrinth is not a matrix')
    if (numCol < 2 || numFil < 2) throw new Error('Labyrinth is a small matrix')

    const lab2 = copyLab(lab)
    let flag = false
    for (i = 0; i < numFil; i++) {
        for (j = 0; j < numCol; j++) {
            if (lab2[i][j] === 'S') {
                lab2[i][j] = 'X'
                flag = true
                break
            }
        }
        if (flag) break
    }

    return cep(lab2, i, j)
}
const numFil = labyrinth.length
const numCol = labyrinth[0].length

console.log(labyrinth)
const result = ppal(labyrinth)
console.log(result)
