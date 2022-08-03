const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUser, updateUser, deleteUser } = require('../controllers/userController')


router.post('/', registerUser)

router.post('/login', loginUser)

router.get('/:id', getUser)




module.exports = router