// Enviroment
require('dotenv').config()
const {
    MONGOOSE_URL
} = process.env

// Modules
const mongoose = require('mongoose')

// User defined modules
const { PanelModel } = require('../data')

// main
mongoose.connect(MONGOOSE_URL)
    .then(() => {
        if (process.argv.length > 4) throw new Error('number of params wrong in set-status')
        if (isNaN(process.argv[3])) throw new Error('status isNaN')

        const panelId = process.argv[2]
        const status = process.argv[3]
        
        return PanelDB.findOne({ _id: panelId })
            .then(panel => {
                if (!panel) throw new Error('panel does not exist')

                panel.status = parseInt(status)
                return panel.save()
            })
            .then(() => { console.log(panelId + ' status changed') })
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())