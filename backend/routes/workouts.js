const express = require('express')

const {createWorkout,getAllWorkouts,getOneWorkout, updateWorkout, deleteWorkout} = require('../controllers/workoutController')

const router = express.Router()

//GET ALL WORKOUTS
router.get('/', getAllWorkouts)

//GET ONE WORKOUT
router.get('/:id', getOneWorkout)

//POST A NEW WORKOUT
router.post('/', createWorkout)


//UPDATE A WORKOUT
router.patch('/:id', updateWorkout)

//DELETE A WORKOUT
router.delete('/:id', deleteWorkout)


module.exports = router