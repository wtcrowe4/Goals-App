const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// POST api/users  
const registerUser = asyncHandler(async (req, res) => {
    //Checking req.body
    const { name, email, password } = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all fields')
    }
    const user = await User.findOne({ email })
    if(user) {res.status(400)
        throw new Error('User already exists')
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //Create user
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if(newUser) {
        res.status(201).json({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
    

    
})

//POST api/users/login
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User' })
})

// GET api/users/:id
const getUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Get User' })
})





module.exports = { registerUser, loginUser, getUser }