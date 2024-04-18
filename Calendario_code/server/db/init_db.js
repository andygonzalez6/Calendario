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
const initScript = fs.readFileSync('./db/init_db.sql', 'utf8');

// Execute the SQL script
db.none(initScript)
  .then(() => {
    console.log('Database initialized successfully.');
    pgp.end(); // Close the connection pool
  })
  .catch(error => {
    console.error('Error initializing database:', error);
    pgp.end(); // Close the connection pool
  });
