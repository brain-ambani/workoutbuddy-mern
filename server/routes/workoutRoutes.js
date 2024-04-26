const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "get all workouts route" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "get single workout route" });
});

// POST a new workout
router.post("/", async (req, res) => {
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
});

// PATCH updated workout
router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH updated workout route" });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "delete workout route" });
});

module.exports = router;
