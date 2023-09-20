'use strict'

const express = require('express')
const { apiKey, checkPermission } = require('../../utils/checkAuth')
const router = express.Router()


//check api Key
router.use(apiKey)

//check permission
router.use(checkPermission('0000'))

router.use('/v1', require('./access'))

module.exports = router