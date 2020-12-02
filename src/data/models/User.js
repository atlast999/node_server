const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = new Schema({
    _id: String,
    username: String,
    hashPassword: String,
})
module.exports = mongoose.model('users', User)