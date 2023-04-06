-- 1. CREATE restaurants TABLE
CREATE TABLE restaurants (
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	location VARCHAR(50) NOT NULL,
	price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

-- 2. CREATE reviews TABLE
CREATE TABLE reviews (
	id SERIAL NOT NULL PRIMARY KEY,
	restaurant_id INT NOT NULL REFERENCES restaurants(id),
	name VARCHAR(50) NOT NULL,
	review TEXT NOT NULL,
	rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

-- 3. OTHER SQL QUERIES
INSERT INTO restaurants(name, location, price_range) VALUES('Burger King', 'Fresno', 1);

select * from restaurants;

drop table restaurants;

-- outputs each location and the count of each location in the restaurants table
select location, count(location) from restaurants group by location;

INSERT INTO reviews(name, restaurant_id, review, rating) VALUES('Joanna', 2, 'Delicious!', 4);

select * from reviews;

-- aggregate functions
select count(*) from reviews; -- counting the number of rows in reviews

select min(rating) from reviews; -- gives us the minimum rating value from reviews table

select max(rating) from reviews; -- gives us the maximum rating value from reviews table

select avg(rating) from reviews; -- gives us the avergage of all ratings from reviews table

-- gives us the avergage of all ratings from reviews table (rounds to 2 decimal points using trunc)
-- renames the column as average_review
select trunc(avg(rating), 2) as average_review from reviews;

-- gives us the average rating for a specific restaurant, rounded to 2 decimal places
select trunc(avg(rating), 2) as avg_rating from reviews where restaurant_id = 1;

-- counts the number of ratings for a specific restaurant
select count(rating) from reviews where restaurant_id = 1;

-- outputs each restaurant_id and the count all reviews for each restaurant_id
select restaurant_id, count(restaurant_id) from reviews group by restaurant_id;

-- joins restaurants data with reviews data where both ids match 
select * from restaurants inner join reviews on restaurants.id = reviews.restaurant_id;

-- gives us restaurants data along with the count of all ratings for a restaurant and average rating for a restaurant
select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;
