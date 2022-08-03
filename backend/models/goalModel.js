const mongoose = require('mongoose')


const goalSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: [true, 'A text field is required.'] }
}, { timestamps: true })

module.exports = mongoose.model('Goal', goalSchema)