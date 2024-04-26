require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workoutRoutes");
// create express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

const port = process.env.PORT || 5000;

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
