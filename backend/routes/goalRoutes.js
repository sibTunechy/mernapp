const express = require('express');
const router = express.Router()
const { getGoals, createGoals, updateGoals, deleteGoals } = require('../controllers/goalController')

router.route('/').get(getGoals).post(createGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)



// router.get('/', getGoals)
// router.post('/', createGoals)    // this 4 lines of code has been reduced to the 2 lines above
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)

module.exports = router;