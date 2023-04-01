// create express web server for backend
const express = require("express");
const app = express();

// require env variables
require("dotenv").config();

// set the backend port number
const port = process.env.PORT || 5001;

// middlewares //
const cors = require("cors"); // allow communication between frontend and backend
const morgan = require("morgan"); // HTTP request logger middleware for node.js

// use middlewares //
app.use(express.json()); // express middleware that gives us access to JSON data in req.body
app.use(cors());
app.use(morgan("tiny"));

// main express route //
const restaurantRoutes = require("./src/restaurant/routes");
app.use("/api/v1/restaurants", restaurantRoutes);

// express web server listens for requests //
app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
