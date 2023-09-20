'use strict'

const apikeyModel = require("../models/apikey.model")

class ApiKeyService {

  static checkApiKey = async (key) => {
    
    // find api key in database
    try {
      const objKey = await apikeyModel.findOne({ key: '01234567890199999313210832801382801' }).lean()
      return objKey
    } catch (error) {
      
    }
  }

}
module.exports = ApiKeyService