require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workoutRoutes");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

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

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(
        `Server is listening on port ${port} and connected to MongoDB`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
