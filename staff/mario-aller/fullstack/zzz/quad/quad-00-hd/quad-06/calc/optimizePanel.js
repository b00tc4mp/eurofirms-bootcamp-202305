const ctxCalc = require('../ctxCalc')
const { Dimension2D, Block, Panel } = require('../logic/classes')

const cep = function (panelInit) {
    const blocksList = panelInit.blocks.map(({ pos, size, orientation }) => {
        return new Block(pos.x.value(), pos.y.value(), size.x.value(), size.y.value(), orientation)
    })
    const panel = new Panel(
        panelInit.reference,
        panelInit.owner,
        panelInit.size.x.val,
        panelInit.size.y.val,
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
                        widthB = b.size.x.val
                        heightB = b.size.y.val
                    } else {
                        widthB = b.size.y
                        heightB = b.size.x
                    }
                    vertexs.push(new Dimension2D(b.pos.x.val, b.pos.y.val))
                    vertexs.push(new Dimension2D(b.pos.x.val + widthB, b.pos.y.val))
                    vertexs.push(new Dimension2D(b.pos.x.val + widthB, b.pos.y.val + heightB))
                    vertexs.push(new Dimension2D(b.pos.x.val, b.pos.y.val + heightB))
                }
            })
            vertexs.forEach(vert => {
                const posIni = new Dimension2D(vert.x.val, vert.y.val)
                for (let qua = 1; qua < 5; qua++)
                    if (panel.quadFree(posIni, qua))
                        for (let rot = 0; rot < 2; rot++) {
                            let widthB, heightB
                            if (rot === 0) {
                                widthB = b.size.x.val
                                heightB = b.size.y.val
                            } else {
                                widthB = b.size.y.val
                                heightB = b.size.x.val
                            }
                            switch (qua) {
                                case 1:
                                    break
                                case 2:
                                    posIni.x.val -= widthB
                                    break
                                case 3:
                                    posIni.x.val -= widthB
                                    posIni.y.val -= heightB
                                    break
                                case 4:
                                    posIni.y.val -= heightB
                                    break
                                default:
                                    throw new Error('wrong quadrant')
                            }
                            const posEnd = new Dimension2D(posIni.x.val + widthB, posIni.y.val + heightB)
                            let validBlock = true
                            console.log(ctxCalc.counter++)
                            for (let coorX = posIni.x.val + 1n; coorX < posEnd.x.val; coorX++) {
                                for (let coorY = posIni.y.val + 1n; coorY < posEnd.y.val; coorY++)
                                    if (!panel.posFree(new Dimension2D(coorX, coorY))) {
                                        validBlock = false
                                        break
                                    }
                                if (!validBlock) break
                            }
                            if (validBlock) {
                                b.pos.x.val = posIni.x.val
                                b.pos.y.val = posIni.y.val
                                b.orientation = rot
                            }
                            cep(panel)
                        }
            })
        }
    })
}

const optimizePanel = function () {
    console.log('Start...')
    ctxCalc.optPanel = cep(ctxCalc.mainPanel)
    console.log('Finished...')
    console.log(ctxCalc.optPanel)
}

module.exports = { optimizePanel }