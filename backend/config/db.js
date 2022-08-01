const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected ${mongoURI}`.green.bold)
    } catch (err) {
        console.error(err.message.red)
        process.exit(1)
    }
}


module.exports = connectDB