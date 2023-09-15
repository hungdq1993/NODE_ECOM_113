const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')

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


module.exports = app