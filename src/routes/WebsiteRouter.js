const express = require('express')
const router = express.Router()

const websiteController = require('../controllers/WebsiteController')

//GET
router.get('/getAllTrackings/:day', websiteController.allTrackings)

module.exports = router