const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AttendantTracking = new Schema({
    _id: String,
    name: String,
    studentId: String,
    type: String,
    dateTime: String,
})
module.exports = mongoose.model('trackings', AttendantTracking)