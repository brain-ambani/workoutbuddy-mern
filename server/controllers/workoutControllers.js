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

// DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such workout" });
  }

  const workout = await Workout.findByIdAndDelete({ _id: id });

  if (!workout) return res.status(404).json({ message: "No such workout" });

  res.status(200).json(workout);

  res.json({ message: "Workout deleted successfully" });
};

// PATCH updated workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such workout" });
  }

  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!workout) return res.status(404).json({ message: "No such workout" });

  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
