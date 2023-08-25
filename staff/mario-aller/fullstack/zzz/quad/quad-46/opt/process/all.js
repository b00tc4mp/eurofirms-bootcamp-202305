// Enviroment
require('dotenv').config()
const { MONGOOSE_URL } = process.env
const {
    resetPanel,
    optimizePanel,
    savePanel,
    savePanelWrong,
    retrieveIdsFromPanelsToOptimize
} = require('../logic/calc')

// Modules
const { mongoose } = require('dat')
const { sleep } = require('com')

// mongoose.connect(MONGOOSE_URL)
//     .then(() => retrieveIdsFromPanelsToOptimize())
//     .then(panelIds => Promise.all(
//         panelIds.map(panelId =>
//             resetPanel(panelId)
//                 .then(() => optimizePanel())
//                 .then(() => savePanel(panelId))
//         )
//     ))©
//     .catch(error => console.error(error))
//     .finally(() => mongoose.disconnect())

mongoose.connect(MONGOOSE_URL)
    .then(() => new Promise((resolve, reject) => {
        (function repeat() {
            console.count('optimize check')

            retrieveIdsFromPanelsToOptimize()
                .then(panelIds => Promise.all(
                    panelIds.map(panelId =>
                        resetPanel(panelId)
                            .then((panel) => {
                                const panelOptimun = optimizePanel(panel)
                                if (panelOptimun) return savePanel(panelOptimun)
                                return savePanelWrong(panel)
                            })
                    )
                ))
                .then(() => {
                    sleep(5000)
                    repeat()
                })
                .catch(reject)
        })()
    }))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
