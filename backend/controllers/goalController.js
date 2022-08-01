const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

//GET api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
    })

    //POST api/goals
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create(req.body)
    res.status(200).json(goal)
})

//PUT api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updatedGoal) {
        res.status(404)
        throw new Error('Goal not found')
    }
    res.status(200).json({ message: `Updated Goal: ${updatedGoal.text}`, id: updatedGoal.id })
})

//DELETE api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findByIdAndDelete(req.params.id)    
    res.status(200).json({ message: `Deleted Goal: ${goal.text}, id: ${goal._id}` })
})






module.exports = { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}