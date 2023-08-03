// Enviroment
require('dotenv').config()
const {
    API_PORT,
    JWT_SECRET,
    MONGOOSE_URL
} = process.env

// Modules
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

// User-defined modules
const {
    Dimension, Dimension2D, Block, Panel,
    sleep, display,
    validateString,
    registerUserModel, authenticaUserModel, retrieveUser
} = require('./logic')

// ------------------
// Test function
// ------------------

display('-------------------')
display('Ver item colocado')
const tam = new Dimension(-6)
console.log('Dimensiones:', tam.isValid2(), '-', tam.isNegative())

sleep(200)

const pos = new Dimension2D(4, 5)
const width = new Dimension(20)
const height = new Dimension(20)
const block_a = new Block(width.value(), height.value(), Block.REGULAR)
const block_b = new Block(width.value(), height.value(), Block.ROTATED90, pos)
console.log(block_a)
console.log(block_b)

display('-------------------')
display('Suma')
const pos_a = new Dimension2D(4, 5)
const pos_b = new Dimension2D(2, 3)
console.log(pos_a)
console.log(pos_b)
const pos_c = pos_a.add(pos_b)
console.log(pos_c)

display('-------------------')
display('Prueba de vertices')
const pan = new Panel(500, 200)
const pos1 = new Dimension2D()
const block1 = new Block(30, 40, BlocK.REGULAR, pos1)
const pos2 = new Dimension2D(50, 60)
const block2 = new Block(10, 20, Block.REGULAR, pos2)
console.log(block1, block2)

pan.blocks.push(block1)
pan.blocks.push(block2)

console.log(pan)

const p = new Dimension2D(10, 10)
console.log('Free point:', pan.posFree(p))
display('-------------------')

