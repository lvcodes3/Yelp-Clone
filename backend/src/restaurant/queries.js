/////////////////
// SQL QUERIES //
/////////////////

// get all the restaurants from the restaurants table
const getAllRestaurants = "SELECT * FROM restaurants";

// get a restaurant (based on id) from the restaurants table
const getRestaurant = "SELECT * FROM restaurants WHERE id = $1";

// this query returns a table that shows all the restaurants and the number of reviews and average rating for each restaurant, if any
// if a restaurant has no reviews, the corresponding columns from the "reviews" subquery will contain NULL values.
const getRestaurantsData = `select * from restaurants 
                            left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews
                            on restaurants.id = reviews.restaurant_id`;

// this query returns a table that shows all the restaurants and three additional columns from the "reviews" subquery for the restaurant with a specific "id" value.
// If the restaurant has no matching rows in the "reviews" table, the count and average rating columns will contain NULL values.
const getRestaurantData = `select * from restaurants 
                           left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews
                           on restaurants.id = reviews.restaurant_id where id = $1`;

// add a restaurant into the restaurants table (returns the restaurant)
const addRestaurant = `INSERT INTO restaurants(name, location, price_range)
                       VALUES($1, $2, $3) RETURNING *`;

// update the data of a restaurant (based on id) in the restaurants table (returns updated restaurant)
const updateRestaurant = `UPDATE restaurants SET name = $1, location = $2, price_range = $3
                          WHERE id = $4 RETURNING *`;

// delete a restaurant (based on id) from the restaurants table
const deleteRestaurant = "DELETE FROM restaurants WHERE id = $1";

// get all the reviews in the reviews table (based on a restaurant's id)
const getReviews = "SELECT * FROM reviews WHERE restaurant_id = $1";

// add a review into the reviews table (returns the review)
const addReview = `INSERT INTO reviews(restaurant_id, name, review, rating)
                   VALUES($1, $2, $3, $4) RETURNING *`;

module.exports = {
  getAllRestaurants,
  getRestaurant,
  getRestaurantsData,
  getRestaurantData,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getReviews,
  addReview,
};
