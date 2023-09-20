'use strict'

const { Schema, model } = require('mongoose') // Erase if already required
const DOCUMENT_NAME = 'Key'
const COLLECTION_NAME = 'keys'

var keyTokenSchema = new Schema(
  {
    name: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    publicKey: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: Array,
      default: []
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

//Export the model
module.exports = model(DOCUMENT_NAME, keyTokenSchema)
