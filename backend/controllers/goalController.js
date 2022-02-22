// @desc Get goals 
// @route GET /api/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc Create goals 
// @route POST /api/goals
// @access private
const createGoals = (req, res) => {
    if(!req.body.text) {
        res.status(400).json({message: 'Please add text'})
    }

    res.status(200).json({message: 'Create goals'})
}

// @desc Update goals 
// @route PUT /api/goals/:id
// @access private
const updateGoals = (req, res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
}

// @desc Delete goals 
// @route DELETE /api/goals/:id
// @access private
const deleteGoals = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}


module.exports = {
    getGoals, createGoals, updateGoals, deleteGoals
}