/////////////////
// SQL QUERIES //
/////////////////

const getAllRestaurants = "SELECT * FROM restaurants";

const getRestaurantsData =
  "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id";

const getRestaurant = "SELECT * FROM restaurants WHERE id = $1";

const getRestaurantData =
  "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1";

const addRestaurant =
  "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *";

const updateRestaurant =
  "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *";

const deleteRestaurant = "DELETE FROM restaurants WHERE id = $1";

const getReviews = "SELECT * FROM reviews WHERE restaurant_id = $1";

const addReview =
  "INSERT INTO reviews(restaurant_id, name, review, rating) VALUES($1, $2, $3, $4) RETURNING *";

module.exports = {
  getAllRestaurants,
  getRestaurantsData,
  getRestaurant,
  getRestaurantData,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getReviews,
  addReview,
};
