const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Game = new Schema({   
    score: String,
    owner: String,
    createdAt: String
})
module.exports = mongoose.model('games', Game)