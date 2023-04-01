/////////////////////////////////////////
// ESTABLISHING CONNECTION TO PGSQL DB //
/////////////////////////////////////////
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool(); // bc of defined PG env variables, no parameters required in Pool()

module.exports = {
  query: (text, params) => pool.query(text, params),
};
