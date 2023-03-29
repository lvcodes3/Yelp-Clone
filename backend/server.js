const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5001;



// express routes//

// 1. get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["McDonalds", "Wendys"]
        }
    });
});

// 2. get single restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {

});

// 3. add restaurant
app.post("/api/v1/restaurants", (req, res) => {

});

// 4. update restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {

});

// 5. delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {

});


app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`);
});