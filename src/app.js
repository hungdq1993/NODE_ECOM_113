require('dotenv').config()
const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const { countConnect, checkOverLoad } = require('./helpers/check.connect')
const router = require('./routes/v1')

/**
 * Color status code
 */
app.use(morgan('dev'))

/**
 * Parse application/json {{ Bao ve thong tin rieng tu }}
 */
app.use(helmet())

/**
 * DESC : Toi uu hoa cac payload gui len
 */
app.use(compression())

countConnect()
checkOverLoad()

app.use('/api', router)

/**
 * DESC: Conection database
 */

require('./database/init.mongodb')

module.exports = app