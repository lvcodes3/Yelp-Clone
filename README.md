# Yelp Clone

A Full-Stack Web Application that behaves similar to Yelp. <br>

We give users the following functionalities: <br>

1. Add many restaurants into the list of restaurants. <br>
2. Update or delete restaurants that exist in the list of restaurants. <br>
3. View a restaurant in more detail. <br>
4. Add reviews on a selected restaurant. <br>
5. Accurate average rating calculation display for each restaurant. <br>

Made possible by the PERN stack (Postgres, Express, React, Node). <br>

## BACKEND

The backend directory is where we utilize: Express.js, Node.js, and the Postgres SQL database, to create a backend API that the frontend can send requests to (can also be tested using Postman). <br>

The following npm dependencies are used: <br>

1. "cors": "^2.8.5", -> To allow frontend and backend to communicate <br>
2. "dotenv": "^16.0.3", -> To store our sensitive information (Server Port Number & Postgres credentials) <br>
3. "express": "^4.18.2", -> To create a web server using express <br>
4. "morgan": "^1.10.0", -> Middleware that tells us which route is being executed on the backend API <br>
5. "nodemon": "^2.0.22", -> To allow us to automatically restart the server when backend files are modified and saved <br>
6. "pg": "^8.10.0" -> To allow us to query our Postgres SQL database <br>

In order to setup and start the backend you must first: <br>

1. **npm install** inside of the backend directory in terminal. <br>
   (downloads and installs the npm backend dependencies) <br>
2. Create your own PostgreSQL database and then create the tables (use backend/db/db.sql as a reference). <br>
3. Create your .env file inside of the backend directory using the format: <br>
   PORT=backend port number goes here <br>
   PGUSER=pg username goes here <br>
   PGHOST=pg localhost name here <br>
   PGPASSWORD=pg password here <br>
   PGDATABASE=pg db name here <br>
   PGPORT=pg port number here <br>
4. **npm start** inside of the backend directory in terminal. <br>
   (starts the backend server) <br>
5. Make sure to start the backend server before the frontend server. <br>

## FRONTEND

The frontend is where we utilize the React frontend framework to create a client-side display so we can send requests to the backend API and also to display data received from the backend API. <br>
We used Bootstrap 4 to style many of the HTML elements present in the web application. <br>
We used CSS Font Awesome for styling purposes as well. <br>
(Both imported in the index.html file.) <br>

The following npm dependencies are used: <br>

1. "@testing-library/jest-dom": "^5.16.5", <br>
2. "@testing-library/react": "^13.4.0", <br>
3. "@testing-library/user-event": "^13.5.0", <br>
4. "axios": "^1.3.4", -> To communicate (send requests) to the backend API <br>
5. "react": "^18.2.0", <br>
6. "react-dom": "^18.2.0", <br>
7. "react-router-dom": "^6.10.0", <br>
8. "react-scripts": "5.0.1", <br>
9. "web-vitals": "^2.1.4" <br>

In order to setup and start the frontend you must: <br>

1. **npm install** inside of the frontend directory in terminal<br>
   (downloads and installs the npm frontend dependencies) <br>

2. **npm start** inside of the frontend directory in terminal<br>
   (starts the frontend and will display the web application in your web browser) <br>
