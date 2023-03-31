// using axios to communicate with backend API
import axios from 'axios';

// setting the base URL of all routes in the backend
export default axios.create({
    baseURL: "http://localhost:5000/api/v1/restaurants"
});