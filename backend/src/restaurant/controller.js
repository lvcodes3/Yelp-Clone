/////////////////////////////////////
// CONTROLLER LOGIC FOR EACH ROUTE //
/////////////////////////////////////
const db = require("../../db");
const queries = require("./queries");

// 1. get all restaurants
const getAllRestaurants = async (req, res) => {
  console.log("Attempting to retrieve all restaurants");
  try {
    const restaurants = await db.query(queries.getAllRestaurants);
    res.status(200).json({
      status: "success",
      results: restaurants.rows.length,
      data: {
        restaurants: restaurants.rows,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

// 2. get a restaurant
const getRestaurant = async (req, res) => {
  console.log(`Attempting to retrieve restaurant with id: ${req.params.id}`);
  try {
    const id = req.params.id;
    const restaurant = await db.query(queries.getRestaurant, [id]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

// 3. add a restaurant
const addRestaurant = async (req, res) => {
  console.log(
    `Attempting to insert restaurant with JSON data: ${JSON.stringify(
      req.body
    )}`
  );
  try {
    const { name, location, price_range } = req.body;
    const restaurant = await db.query(queries.addRestaurant, [
      name,
      location,
      price_range,
    ]);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

// 4. update a restaurant
const updateRestaurant = async (req, res) => {
  console.log(
    `Attempting to update restaurant of id: ${
      req.params.id
    } with JSON data: ${JSON.stringify(req.body)}`
  );
  try {
    const id = req.params.id;
    const { name, location, price_range } = req.body;
    const restaurant = await db.query(queries.updateRestaurant, [
      name,
      location,
      price_range,
      id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

// 5. delete a restaurant
const deleteRestaurant = async (req, res) => {
  console.log(`Attempting to delete restaurant with id: ${req.params.id}`);
  try {
    const id = req.params.id;
    const response = await db.query(queries.deleteRestaurant, [id]);
    res.status(204).send();
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurant,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
};

/*
// example of express middleware (define at top so it can get the request before proceeding to direct route)
app.use((req, res, next) => {
    console.log("This is a middleware.");
    // proceed to the route if configured
    next();
});
*/
