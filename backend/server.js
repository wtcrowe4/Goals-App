//Dependancies
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

//Config
const app = express()

//Use routes folder
app.use('/api/goals', require('./routes/goalRoutes'))

//Server
app.listen(port, () => console.log(`Server listening on ${port}`))

