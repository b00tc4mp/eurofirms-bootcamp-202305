const context = require('../context')
const { Dimension2D, Block, Panel } = require('../logic/classes')

const cep = function (panelInit) {
    const blocksList = panelInit.blocks.map(({ pos, size, orientation }) => {
        return new Block(pos.x.toNumber(), pos.y.toNumber(), size.x.toNumber(), size.y.toNumber(), orientation)
    })
    const panel = new Panel(
        panelInit.reference,
        panelInit.owner,
        panelInit.size.x.value,
        panelInit.size.y.value,
        blocksList,
        panelInit.status
    )
    if (panel.blocskPlacedAll()) {
        panel.status = 2
        return panel
    } else panel.blocks.forEach(b => {
        if (!b.isPlaced()) {
            const vertexs = []
            vertexs.push(new Dimension2D(0n, 0n))
            panel.blocks.forEach(bVertex => {
                if (bVertex.isPlaced()) {
                    let widthB, heightB
                    if (bVertex.orientation === 0) {
                        widthB = b.size.x.value
                        heightB = b.size.y.value
                    } else {
                        widthB = b.size.y
                        heightB = b.size.x
                    }
                    vertexs.push(new Dimension2D(b.pos.x.value, b.pos.y.value))
                    vertexs.push(new Dimension2D(b.pos.x.value + widthB, b.pos.y.value))
                    vertexs.push(new Dimension2D(b.pos.x.value + widthB, b.pos.y.value + heightB))
                    vertexs.push(new Dimension2D(b.pos.x.value, b.pos.y.value + heightB))
                }
            })
            vertexs.forEach(vertex => {
                const posIni = new Dimension2D(vertex.x.value, vertex.y.value)
                for (let quadrant = 1; quadrant < 5; quadrant++)
                    if (panel.quadFree(posIni, quadrant))
                        for (let rotation = 0; rotation < 2; rotation++) {
                            let widthB, heightB
                            if (rotation === 0) {
                                widthB = b.size.x.value
                                heightB = b.size.y.value
                            } else {
                                widthB = b.size.y.value
                                heightB = b.size.x.value
                            }
                            switch (quadrant) {
                                case 1:
                                    break
                                case 2:
                                    posIni.x.value -= widthB
                                    break
                                case 3:
                                    posIni.x.value -= widthB
                                    posIni.y.value -= heightB
                                    break
                                case 4:
                                    posIni.y.value -= heightB
                                    break
                                default:
                                    throw new Error('wrong quadrant')
                            }
                            const posEnd = new Dimension2D(posIni.x.value + widthB, posIni.y.value + heightB)
                            let validBlock = true
                            console.count('Nesting')
                            for (let coorX = posIni.x.value + 1n; coorX < posEnd.x.value; coorX++) {
                                for (let coorY = posIni.y.value + 1n; coorY < posEnd.y.value; coorY++)
                                    if (!panel.posFree(new Dimension2D(coorX, coorY))) {
                                        validBlock = false
                                        break
                                    }
                                if (!validBlock) break
                            }
                            if (validBlock) {
                                b.pos.x.value = posIni.x.value
                                b.pos.y.value = posIni.y.value
                                b.orientation = rotation
                            }
                            cep(panel)
                        }
            })
        }
    })
}

const optimizePanel = function () {
    console.log('Start...')
    context.optPanel = cep(context.mainPanel)
    console.log('Finished...')
    console.log(context.optPanel)
}

module.exports = { optimizePanel }