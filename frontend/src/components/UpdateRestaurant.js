import { useParams } from "react-router-dom";

const UpdateRestaurant = () => {
  const id = useParams();
  console.log(id);

  return <div>UpdateRestaurant</div>;
};
export default UpdateRestaurant;
