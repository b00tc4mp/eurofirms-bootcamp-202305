// Enviroment
require('../../../../../../quad-27/opt/node_modules/dotenv/lib/main').config()
const { MONGOOSE_URL } = process.env
const optimizePanel = require('./optimizePanel')

// Modules
const { mongoose } = require('dat')
const { Block, Panel } = require('../classes')

const panelTest =
{
    id: "64d107da2b4f0263e9c8a33e",
    reference: "Panel 2",
    owner: "64c7d50153318e2b671fdcc7",
    width: 500,
    height: 400,
    blocks: [
        {
            "x": -1,
            "y": -1,
            "width": 40,
            "height": 30,
            "orientation": 0,
            "date": "2023-08-08T16:32:24.371Z",
            "id": "64d26e185eff4b1a74a7e2a2"
        },
        {
            "x": -1,
            "y": -1,
            "width": 50,
            "height": 60,
            "orientation": 0,
            "date": "2023-08-08T16:32:24.371Z",
            "id": "64d26e185eff4b1a74a7e2a3"
        },
        {
            "x": -1,
            "y": -1,
            "width": 50,
            "height": 70,
            "orientation": 0,
            "date": "2023-08-08T16:32:24.371Z",
            "id": "64d26e185eff4b1a74a7e2a4"
        }

        ,{
            "x": -1,
            "y": -1,
            "width": 40,
            "height": 70,
            "orientation": 0,
            "date": "2023-08-08T16:32:24.371Z",
            "id": "64d26e185eff4b1a74a7e2a4"
        }

    ],
    status: 1
}

// main
mongoose.connect(MONGOOSE_URL)
    .then(() => {
        const blocksObj = panelTest.blocks.map(block => {
            return new Block(block.x, block.y,
                block.width, block.height,
                block.orientation)
        })
        const panelObj = new Panel(panelTest.id,
            panelTest.reference,
            panelTest.owner,
            panelTest.width,
            panelTest.height,
            blocksObj,
            panelTest.status)
            
        return optimizePanel(panelObj)
    })
    .then((panel) => console.log(panel))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
