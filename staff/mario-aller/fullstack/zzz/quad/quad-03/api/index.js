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
    Dimension, Dimension2D,
    Block,
    Panel,
    sleep, display
} = require('./logic')
