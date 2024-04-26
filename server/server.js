const express = require("express");
require("dotenv").config();

// create express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

const port = process.env.PORT || 5000;

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
