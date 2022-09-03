const express = require('express')
const router = express.Router()
const trackerController = require('../controllers/tracker') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, trackerController.getTarget)

router.post('/createTarget', trackerController.createTarget)

router.put('/updateTarget', trackerController.updateTarget)

/*

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

*/

module.exports = router