// Student Name: Peter Heck
// Student ID: 1221899224
// Date: 07/14/2024

// Adding a comment so a pull request can be made

const express = require('express');
const app = express();
const port = 4000;
const logger = require('./loggerMiddleware');
const router = express.Router();

// Logger middleware
app.use('/', logger.logUser);

// Route
app.get('/', (req, res) => {
    res.send('Welcome!');
  });
  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});