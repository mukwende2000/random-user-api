const express = require('express')
const generateUser = require('../controllers/generateUserController')
const { generateUsers } = require('../controllers/generateUsersController')
const router = express.Router()

router.get('/', generateUser)
router.get('/:id', generateUsers )

module.exports = router