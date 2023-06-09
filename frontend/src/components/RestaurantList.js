import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import StarRating from "./StarRating";

const RestaurantList = (props) => {
  // using our created context to store data
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  // useNavigate allows us to navigate programmatically between pages or routes in our React app
  let navigate = useNavigate();

  // will only run when the component mounts
  useEffect(() => {
    try {
      const getAllRestaurants = async () => {
        const restaurants = await RestaurantFinder.get("/");
        setRestaurants(restaurants.data.data.restaurants);
      };
      getAllRestaurants();
    } catch (err) {
      console.log(err.message);
    }
  }, [setRestaurants]);

  const handleRestaurantClick = (id) => {
    // navigating to a new location in the app
    navigate(`/restaurants/${id}`);
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.average_rating} />
        <span className="text-warning ml-1">({restaurant.count})</span>
      </>
    );
  };

  const handleUpdate = async (e, id) => {
    // stopping update button click to propogate to tr click
    e.stopPropagation();

    // navigating to a new location in the app
    navigate(`/restaurants/${id}/update`);
  };

  const handleDelete = async (e, id) => {
    // stopping delete button click to propogate to tr click
    e.stopPropagation();

    try {
      const response = await RestaurantFinder.delete(`/${id}`);

      // filtering out the deleted restaurant from the restaurant list
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="list-group">
      <table className="table table-hover text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* if restaurants exists we will dynamically create table rows */}
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  key={restaurant.id}
                  onClick={() => handleRestaurantClick(restaurant.id)}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => handleUpdate(e, restaurant.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(e, restaurant.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default RestaurantList;
