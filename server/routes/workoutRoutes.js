const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ message: "post new workout route" });
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
