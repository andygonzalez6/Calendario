const pgp = require('pg-promise')();
require('dotenv').config()

const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
const connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;
const db = pgp(connectionString);

const fs = require('fs');

// Read the SQL script
const resetScript = fs.readFileSync('./db/reset_db.sql', 'utf8');

// Execute the SQL script
db.none(resetScript)
  .then(() => {
    console.log('Database reset successfully.');
    pgp.end(); // Close the connection pool
  })
  .catch(error => {
    console.error('Error resetting database:', error);
    pgp.end(); // Close the connection pool
  });
