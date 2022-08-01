//Dependancies
const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorMiddleware')
const port = process.env.PORT
const colors = require('colors')
const connectDB = require('./config/db')

//MongoDB
connectDB()

//Config
const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Use routes folder
app.use('/api/goals', require('./routes/goalRoutes'))

//Error Middleware  
app.use(errorHandler)

//Server
app.listen(port, () => console.log(`Server listening on ${port}`.green.bold))

