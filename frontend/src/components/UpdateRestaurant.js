import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateRestaurant = (props) => {
  // get the id from the url
  const { id } = useParams();
  // states for the update form
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // useNavigate allows us to navigate programmatically between pages or routes in our React app
  let navigate = useNavigate();

  // on page load get the data from the backend api for the restaurant by id
  useEffect(() => {
    try {
      const getRestaurant = async () => {
        const restaurant = await RestaurantFinder.get(`/${id}`);
        setName(restaurant.data.data.restaurant.name);
        setLocation(restaurant.data.data.restaurant.location);
        setPriceRange(restaurant.data.data.restaurant.price_range);
      };
      getRestaurant();
    } catch (err) {
      console.log(err.message);
    }
  }, [id]);

  const handleFormSubmit = async (e) => {
    // prevent page reload
    e.preventDefault();

    try {
      const restaurant = await RestaurantFinder.put(`/${id}`, {
        name: name,
        location: location,
        price_range: priceRange,
      });
      // send user back to home page after update
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="my-5">
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            className="form-control"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="priceRange">Price Range</label>
          <select
            id="priceRange"
            className="custom-select mr-sm-2"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>

        <button
          className="btn btn-success"
          type="submit"
          onClick={handleFormSubmit}
        >
          Update
        </button>
      </form>
    </div>
  );
};
export default UpdateRestaurant;
