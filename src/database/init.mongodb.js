'use strict'

const mongoose = require('mongoose')

const URL = 'mongodb+srv://hungdq1993:hungpro113@cluster0.q7kmelj.mongodb.net/'

class Database {
  constructor() {
    this.connect()
  }

  connect(type = 'mongedb') {
    if (true) {
      mongoose.set('debug', 'true')
      mongoose.set('debug', { color: true })
    }

    /**
     * @description Connect to database
     */
    
    mongoose
      .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'shop-me'
      })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch((err) => {
        console.error('Database connection error')
      })
  }

  /**
   * @description Create a singleton instance
   * @returns {Database}
   */

  static getInstance() {
    if (!this.instance) {
      this.instance = new Database()
    }
    return this.instance
  }
}

const instance = Database.getInstance()

module.exports = instance
