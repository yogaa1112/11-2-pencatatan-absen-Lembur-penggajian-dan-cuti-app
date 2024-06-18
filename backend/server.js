const express = require('express');
require('dotenv').config();
const Router = require('./routes/index');
const Logger = require('./middleware/logger');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT;

if (!process.env.NODE_ENV) {
  throw new Error('ERROR: NODE_ENV IS MISSING');
}

// Use built-in middleware
app.use(cors());  // enable all CORS requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Use custom middleware
app.use(Logger);

// Main routes
app.use(Router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
