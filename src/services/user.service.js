'use strict'

const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const KeyTokenService = require('./keyToken.service')
const { createTokenPair } = require('../utils/auth')
const { filterKeyByObject } = require('../utils/common')
const roles = {
  admin: ['getUsers', 'manageUsers'],
  user: ['user']
}

class UserService {
  static register = async ({ email, password, name }) => {
    try {
      const findEmailExists = await userModel.findOne({ email }).lean()
      if (findEmailExists) {
        return {
          code: 'xxx',
          message: 'Email exists',
          status: 400
        }
      }

      const passwordHash = await bcrypt.hash(password, 10)

      const newUser = await userModel.create({ email, password: passwordHash, name, roles: roles.user })

      if (newUser) {
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
          },
          privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
          }
        })

        const publicKeyString = await KeyTokenService.createToken({ userId: newUser._id, publicKey })

        if (!publicKeyString) {
          return {
            code: 'xxx',
            message: 'error public string key error',
            status: 400
          }
        }

        const tokens = await createTokenPair({ userId: newUser._id }, publicKey, privateKey)
        console.log('create token success', tokens)

        console.log('create token success')

        return {
          code: 201,
          metaData: {
            user: filterKeyByObject({ key: ['_id', 'name', 'email'], object: newUser }),
            tokens
          }
        }
      }
    } catch (error) {
      return {
        code: 'xxx',
        message: error.message,
        status: 500
      }
    }
  }
}

module.exports = UserService
