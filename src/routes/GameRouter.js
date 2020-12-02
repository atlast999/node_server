const express = require('express')
const passport = require('../passport/Passport')
const router = express.Router()

const gameController = require('../controllers/GameController')

//GET
router.get('/getAllGames',
    passport.authenticate(),
    gameController.allGames)

//PUT
router.put('/addNewGame', 
    passport.authenticate(),
    gameController.addNew)

module.exports = router