const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT;
app.listen(5000, () => {
    console.log(`Server listening on PORT ${port}`);
});