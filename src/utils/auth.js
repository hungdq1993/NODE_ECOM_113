'use strict'
const jwt = require('jsonwebtoken')

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    const accessToken = await jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '1d' })
    const refreshToken = await jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '7d' })

    jwt.verify(accessToken, publicKey, (err, decode) => {
      if(err){
        console.log('err verify access token', err)
      }else{
        console.log('decode access token', decode)
      }
    })

    return {accessToken, refreshToken}

    
  } catch (error) {
    
  }
}
module.exports = {
  createTokenPair
}