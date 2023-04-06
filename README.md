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

The backend is where we utilize Express.js, Node.js, and Postgres to create a backend API that the frontend
can access (can also be tested using Postman).

The following npm dependencies are used:
"cors": "^2.8.5", -> To allow frontend and backend to communicate
"dotenv": "^16.0.3", -> To store our sensitive information (Server Port Number & Postgres credentials)
"express": "^4.18.2", -> To create a web server using express
"morgan": "^1.10.0", -> Middleware that tells us which route is being executed on the backend API
"nodemon": "^2.0.22", -> To allow us to automatically restart the server when backend files are modified and saved
"pg": "^8.10.0" -> To allow us to query our Postgres SQL database

In order to setup the backend you must first:

1. "npm install" inside of the backend directory.

2. Create your own PostgreSQL database and then create the tables (use ./db/db.sql as a reference).

3. Create your .env file inside of the backend directory using the format:
   PORT=backend port number goes here
   PGUSER=pg username goes here
   PGHOST=pg localhost name here
   PGPASSWORD=pg password here
   PGDATABASE=pg db name here
   PGPORT=pg port number here

4. **npm start** inside of the backend directory to start the backend server.

## FRONTEND

The frontend is where we utilize React to create a client-side display using React components and overall
functionality.
We used Bootstrap 4 to style many of the html elements present in the web application.
We used CSS Font Awesome for styling purposes as well.

The following npm dependencies are used:
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.3.4", -> To communicate (send requests) to the backend API
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.10.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"

In order to setup the frontend you must:

1. **npm install** inside of the frontend directory in terminal<br>
   (downloads and installs the npm frontend dependencies)

2. **npm start** inside of the frontend directory in terminal<br>
   (starts the frontend and will display the web application in your web browser)
