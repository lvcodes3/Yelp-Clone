import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((review) => {
        return (
          <div
            className="card text-white bg-primary mb-3 mr-4"
            style={{ width: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span className="h5">{review.name}</span>
              <span className="h6">
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text h6">{review.review}</p>
            </div>
          </div>
        );
      })}
      {/*
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ width: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span className="h5">Luis</span>
          <span className="h6">
            <StarRating rating={2.5} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text h6">Awesome food!</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ width: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span className="h5">Luis</span>
          <span className="h6">
            <StarRating rating={2.5} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text h6">Awesome food!</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ width: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span className="h5">Luis</span>
          <span className="h6">
            <StarRating rating={2.5} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text h6">Awesome food!</p>
        </div>
      </div>
  */}
    </div>
  );
};
export default Reviews;
