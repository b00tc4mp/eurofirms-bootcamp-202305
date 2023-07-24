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
    Dim, Dim2,
    Block, BlockPlaced,
    Panel,
    sleep, 
} = require ('./logic')


// ------------------
// Test function
// ------------------

var a, apl
var b, bpl
var c, pos, pan


display('Ver item colocado')
a = new Block(20, 30)
pos = new Dim2(4, 5)
apl = new BlockPlaced(a, pos, BlockPlaced.ROTATED_POSITION)
console.log(apl)

display('Ver positivo y negativo')
a = new Dim(-787)
console.log(a)
console.log(a.isNegative())

display('Suma')
a = new Dim2(4, 5)
b = new Dim2(2, 3)
c = a.add(b)
console.log(c)

display('Prueba de vertices')
pan = new Panel(500, 200)
a = new Block(30, 40)
pos = new Dim2()
apl = new BlockPlaced(a, pos, BlockPlaced.REGULAR_POSITION)
b = new Block(10, 20)
pos = new Dim2(50, 60)
bpl = new BlockPlaced(a, pos, BlockPlaced.ROTATED_POSITION)

pan.list.push(apl)
pan.list.push(bpl)

c = new Dim2(30,30)
console.log (c)
console.log(pan.posFree(c))

