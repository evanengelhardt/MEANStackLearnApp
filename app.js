const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// set up Application
const app = express();

// connect to database
const config = require('./config/database');
mongoose.connect(config.database);
// on connnection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});
// on error
mongoose.connection.on('error', (err) => {
  console.log('Database Error: ' + err);
});

// set up user routes
const users = require('./routes/users');
app.use('/users', users);

// Port Number
const port = 3000;

// cors middleware
app.use(cors());

// Set Stativ folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.listen(port, () => {
  console.log('server started on port: ' + port);
});
