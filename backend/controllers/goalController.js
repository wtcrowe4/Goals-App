const getGoals = (req, res) => res.status(200).json({ message: 'Get Goals' })
const setGoal = (req, res) => res.status(200).json({ message: 'Create Goal'})
const editGoal = (req, res) => res.status(200).json({ message: `Update Goal ${req.params.id}`})
const deleteGoal = (req, res) => res.status(200).json({ message: `Delete Goal ${req.params.id}`})






module.exports = { 
    getGoals,
    setGoal,
    editGoal,
    deleteGoal
}