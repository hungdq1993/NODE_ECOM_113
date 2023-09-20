'use strict'

const { Schema, model } = require('mongoose') // Erase if already required
const DOCUMENT_NAME = 'Apikeys'
const COLLECTION_NAME = 'Apikeys'

var apiKeySchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true
    },
    status: {
      type: Boolean,
      default: true,
    },
    permission: {
      type: [String],
      required: true,
      enum: ['0000', '1111', '2222']
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

//Export the model
module.exports = model(DOCUMENT_NAME, apiKeySchema)
