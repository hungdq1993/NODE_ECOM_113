'use strict'
const {model, Schema} = require('mongoose') // Erase if already required

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'users'

// Declare the Schema of the Mongo model
var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive'
    },
    verify: {
      type: Boolean,
      default: false
    },
    roles: {
      type: Array,
      default: ['user']
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

module.exports = model(DOCUMENT_NAME, userSchema)
