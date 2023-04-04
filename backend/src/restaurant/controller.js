/////////////////////////////////////
// CONTROLLER LOGIC FOR EACH ROUTE //
/////////////////////////////////////
const db = require("../../db");
const queries = require("./queries");

// 1. get all restaurants
const getAllRestaurants = async (req, res) => {
  console.log("Attempting to retrieve all restaurants");
  try {
    const restaurantsRatingsData = await db.query(queries.getRestaurantsData);
    res.status(200).json({
      status: "success",
      results: restaurantsRatingsData.rows.length,
      data: {
        restaurants: restaurantsRatingsData.rows,
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
    // get restaurant by id
    const restaurant = await db.query(queries.getRestaurantData, [id]);
    // get reviews for the restaurant
    const reviews = await db.query(queries.getReviews, [id]);
    // send back data
    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
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

// 6. add review to a restaurant
const addReview = async (req, res) => {
  console.log(
    `Attempting to add a review to restaurant id: ${
      req.params.id
    } and review data: ${JSON.stringify(req.body)}`
  );
  try {
    const id = req.params.id;
    const { name, review, rating } = req.body;
    const newReview = await db.query(queries.addReview, [
      id,
      name,
      review,
      rating,
    ]);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
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
  addReview,
};

/*
// example of express middleware (define at top so it can get the request before proceeding to direct route)
app.use((req, res, next) => {
    console.log("This is a middleware.");
    // proceed to the route if configured
    next();
});
*/
