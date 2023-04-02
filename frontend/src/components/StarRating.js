// takes in a props rating
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    // insert whole star
    if (i <= rating) {
      stars.push(<i className="fa-solid fa-star text-warning"></i>);
    }
    // insert half star (rating is a decimal)
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i className="fa-solid fa-star-half-stroke text-warning"></i>);
    }
    // insert empty star
    else {
      stars.push(<i className="fa-regular fa-star text-warning"></i>);
    }
  }

  return (
    <>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </>
  );
};
export default StarRating;
