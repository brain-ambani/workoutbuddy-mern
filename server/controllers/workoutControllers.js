const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });

    res.status(200).json(workouts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such workout" });
  }

  try {
    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// POST a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const newWorkout = await Workout.create({
      title,
      reps,
      load,
    });

    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PATCH updated workout

// DELETE a workout

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
};
