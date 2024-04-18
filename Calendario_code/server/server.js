const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const pool = require('./db/pool');

const user_router = require('./routes/user');
const session_router = require('./routes/session');
const event_router = require('./routes/event');
const schedule_router = require('./routes/schedule');
const eventschedule_router = require('./routes/eventschedule');

const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const crypto = require('crypto');

const {specs, swaggerUi} = require('./swagger.js');

const cors = require("cors");
var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200,
  credentials: true,
  exposedHeaders: ["set-cookie"],
  methods: ["GET", "POST", "PUT", "DELETE"]
};

app.use(cors(corsOptions));


//Secret key generation for sessions
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};
const secretKey = generateSecretKey();

//Creating a personal user session
app.use(session({
  secret: secretKey,
  cookie: { maxAge: 3000, httpOnly: false},
  saveUninitialized: false,
  resave: false,
  store: new pgSession({
    pool: pool,
    tableName: 'sessions'
  })
}))

//Mounting router routes
app.use('/eventschedule', eventschedule_router);
app.use('/schedule', schedule_router);
app.use('/event', event_router);
app.use('/user', user_router);
app.use('/session', session_router)

//Greeting message for reaching backend
app.get('/', (req, res) => {
  res.json({ message: 'Hello, I am backend!' });
});

//Enabling Swagger UI documentation
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

//Running app iff connected successfully to database
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to PostgreSQL:', err);
    } else {
      console.log('Connected to PostgreSQL:', res.rows[0].now);
      app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
        });
    }  
  });
  


