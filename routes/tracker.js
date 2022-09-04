const express = require('express')
const router = express.Router()
const trackerController = require('../controllers/tracker') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, trackerController.getTarget)

router.put('/updateTarget', trackerController.updateTarget)


module.exports = router