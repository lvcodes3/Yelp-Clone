-- RESTAURANTS
CREATE TABLE restaurants (
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	location VARCHAR(50) NOT NULL,
	price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants(name, location, price_range) VALUES('Burger King', 'Fresno', 1);

select * from restaurants;

drop table restaurants;

-- REVIEWS
CREATE TABLE reviews (
	id SERIAL NOT NULL PRIMARY KEY,
	restaurant_id INT NOT NULL REFERENCES restaurants(id),
	name VARCHAR(50) NOT NULL,
	review TEXT NOT NULL,
	rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

INSERT INTO reviews(name, restaurant_id, review, rating) VALUES('Joanna', 2, 'Delicious!', 4);

select * from reviews;