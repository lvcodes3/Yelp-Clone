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
        res.status(200).json({
            status: "success",
            results: restaurants.rows.length,
            data: {
                restaurants: restaurants.rows
            }
        });
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
        const restaurant = await db.query("SELECT * FROM restaurants WHERE id = $1", [id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0]
            }
        });
    } 
    catch (err) {
        console.log(err.message);
    }
});

// 3. add a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    console.log(`Attempting to insert restaurant with JSON data: ${JSON.stringify(req.body)}`);
    try {
        const { name, location, price_range } = req.body;
        const restaurant = await db.query(
            "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *",
            [name, location, price_range]
        );
        res.status(201).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0]
            }
        });
    } 
    catch (err) {
        console.log(err.message);
    }
});

// 4. update a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    console.log(`Attempting to update restaurant of id: ${req.params.id} with JSON data: ${JSON.stringify(req.body)}`);
    try {
        const id = req.params.id;
        const { name, location, price_range } = req.body;
        const restaurant = await db.query(
            "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
            [name, location, price_range, id]
        );
        res.status(200).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0]
            }
        });
    } 
    catch (err) {
        console.log(err.message);
    }
});

// 5. delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    console.log(`Attempting to delete restaurant with id: ${req.params.id}`);
    try {
        const id = req.params.id;
        const response = await db.query(
            "DELETE FROM restaurants WHERE id = $1",
            [id]
        );
        res.status(204).send();
    } 
    catch (err) {
        console.log(err.message);
    }
});


app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`);
});