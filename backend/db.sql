CREATE TABLE restaurants (
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	location VARCHAR(50) NOT NULL,
	price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants(name, location, price_range) VALUES('Burger King', 'Fresno', 1);

select * from restaurants;

drop table restaurants;