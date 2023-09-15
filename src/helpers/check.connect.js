'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const SECOND = 5000
/**
 * @description Count number of connections
 */
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log('Number of connections:', numConnection)
}

const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length
    //check number core CPU computer
    const numberCore = os.cpus().length
    //check memory used
    const memoryUsage = process.memoryUsage().rss/1024/1024
    // console.log('memoryUsage', memoryUsage)
    const maximumConnection = numberCore * 5
    if(numConnection > maximumConnection) {
      console.log('Overload')
      process.exit()
    }
  }, SECOND)
}

module.exports = {
  countConnect,
  checkOverLoad
}