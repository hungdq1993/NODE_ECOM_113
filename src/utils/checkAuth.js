'use strict'

const ApiKeyService = require('../services/apiKey.service')

const HEADER_NAME = {
  API_KEY: 'x-api-key',
  AUTHORZATION: 'authorazation'
}

const apiKey = async (req, res, next) => {
  try {
    const apiKey = req.headers[HEADER_NAME.API_KEY]?.toString()
    if (!apiKey) {
      return res.status(400).json({ message: 'api key is required' })
    }
    // check object key

    const objKey = await ApiKeyService.checkApiKey(apiKey)
    if (!objKey) {
      return res.status(400).json({ message: 'api key is invalid' })
    }
    req.objKey = objKey
    return next()

  } catch (error) {
    next(error)
  }
}

const checkPermission =  (permission) => {
  return (req, res, next) => {
    if(!req.objKey.permission){
      return res.status(400).json({ message: 'permission denied' })
    }
    if(!req.objKey.permission.includes(permission)){
      return res.status(400).json({ message: 'permission denied' })
    }
    return next()
  }
}

module.exports = {
  apiKey,
  checkPermission
}
