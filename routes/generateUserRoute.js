const express = require('express')
const { generateUsers } = require('../controllers/generateUsersController')
const router = express.Router()

router.get('/', generateUsers)

module.exports = router