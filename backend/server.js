const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5001;

const morgan = require('morgan'); // HTTP request logger middleware for node.js
//app.use(morgan("tiny"));
// example output: GET /api/v1/restaurants 304 - - 1.539 ms

// express middleware that gives us access to JSON data in req.body
app.use(express.json()); 


// pg import
const db = require('./db');


// example of express middleware (define at top so it can get the request)
/*
app.use((req, res, next) => {
    console.log("This is a middleware.");
    // proceed to the route if configured
    next();
});
*/


// express routes //

// 1. get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    console.log("Attempting to retrieve all restaurants");
    try {
        const restaurants = await db.query("SELECT * FROM restaurants");
        res.status(200).json(restaurants.rows);
    } 
    catch (err) {
        console.log(err.message);
    }
});

// 2. get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(`Attempting to retrieve restaurant with id: ${req.params.id}`);
    try {
        const id = req.params.id;
        const restaurant = await db.query(
            "SELECT * FROM restaurants WHERE id = $1",
            [id]
        );
        res.status(200).json(restaurant.rows[0]);
    } 
    catch (err) {
        console.log(err.message);
    }
});

// 3. add a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(`Attempting to insert restaurant with JSON data: ${JSON.stringify(req.body)}`);
});

// 4. update a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(`Attempting to update restaurant of id: ${req.params.id} with JSON data: ${JSON.stringify(req.body)}`);
});

// 5. delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    console.log(`Attempting to delete restaurant with id: ${req.params.id}`);
});


app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`);
});