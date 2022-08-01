const mongoose = require('mongoose')


const goalSchema = new mongoose.Schema({
    text: { type: String, required: [true, 'A text field is required.'] }


}, { timestamps: true })

module.exports = mongoose.model('Goal', goalSchema)