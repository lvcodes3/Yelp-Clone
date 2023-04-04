import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const AddReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("Select a Rating");
  const [review, setReview] = useState("");
  const { id } = useParams();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name: name,
        review: review,
        rating: rating,
      });
      console.log(response);
      // refresh page to display new data
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="col">
            <select
              className="custom-select h6 mb-4"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Select a Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col">
            <textarea
              className="form-control"
              cols="30"
              rows="5"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Review"
            ></textarea>
          </div>
        </div>
        <button
          className="btn btn-success"
          type="submit"
          onClick={handleFormSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default AddReview;
