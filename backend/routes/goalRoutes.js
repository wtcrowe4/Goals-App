const express = require('express')
const router = express.Router()
const { getGoals, setGoal, editGoal, deleteGoal } = require('../controllers/goalController') 

//Routes
router.route('/').get(getGoals).post(setGoal)

router.put('/:id', editGoal)

router.delete('/:id', deleteGoal)


module.exports = router