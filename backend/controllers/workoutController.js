const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getAllWorkouts = async(req, res) => {
    try{
        const workouts = await Workout.find({}).sort({createdAt: -1}) //sort by most recent or desc
        res.status(200).json(workouts)
    }catch(error){
        res.status(400).json({message: error.message})
    }
};

//get one workout
const getOneWorkout = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'No such workout found or invalid ID'})
    }

    try{
        const workout = await Workout.findById(id)
        if(!workout){
            res.status(404).json({message: 'workout not found'})
        }
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({message: error.message})
    }
};

//create a workout
const createWorkout = async(req, res) => {
    const {title, reps, load, notes} = req.body;

    try{
        const workout = await Workout.create({title, reps, load, notes})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({message: error.message})
    }
};


//update a workout
const updateWorkout = async(req, res) => {
    const {id} = req.params;
    const {title, reps, load, notes} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'No such workout found or invalid ID'})
    }

    try{
        const workout = await Workout.findByIdAndUpdate({_id: id}, {title, reps, load, notes}, {new: true})

        if(!workout){
            res.status(404).json({message: 'workout not found'})
        }
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({message: error.message})
    }
};


//delete a workout
const deleteWorkout = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: 'No such workout found or invalid ID'})
    }

    try{
        const workout = await Workout.findByIdAndDelete({_id: id})

        if(!workout){
            res.status(404).json({message: 'workout not found'})
        }
        res.status(200).json({message: 'workout deleted'})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}





module.exports = {createWorkout, getAllWorkouts, getOneWorkout, updateWorkout, deleteWorkout}






