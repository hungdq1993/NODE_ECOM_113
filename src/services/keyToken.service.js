'use strict'

const keytokenModel = require('../models/keytoken.model')

class KeyTokenService {
  static createToken = async ({ userId, publicKey }) => {
    console.log('113')
    try {
      const publicKeyString = publicKey.toString()
      const tokens = await keytokenModel.create({ name: userId, publicKey: publicKeyString })
      return tokens ? tokens.publicKey : null
    } catch (error) {
      consople.log(error)
    }
  }
}
module.exports = KeyTokenService
