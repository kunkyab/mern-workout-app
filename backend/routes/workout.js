const express = require("express")
const router = express.Router()
const {createWorkout,getSingleWorkout,getWorkouts,deleteWorkout,updateWorkout} = require("../controller/workoutController")

// this is to get all workout
router.get('/',getWorkouts)


// get single workout

router.get('/:id',getSingleWorkout)

//post a new workout

router.post('/',createWorkout)

//delete a request
router.delete('/:id',deleteWorkout)

//update a workout

router.patch('/:id',updateWorkout)



module.exports = router