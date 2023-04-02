/////////////////
// SQL QUERIES //
/////////////////

const getAllRestaurants = "SELECT * FROM restaurants";

const getRestaurant = "SELECT * FROM restaurants WHERE id = $1";

const addRestaurant =
  "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *";

const updateRestaurant =
  "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *";

const deleteRestaurant = "DELETE FROM restaurants WHERE id = $1";

const getReviews = "SELECT * FROM reviews WHERE restaurant_id = $1";

module.exports = {
  getAllRestaurants,
  getRestaurant,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getReviews,
};
