const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// register
router.post('/register', (req, res, next) => {
  res.send('REGISTER');
});

// authenticate
router.post('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

// profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

module.exports = router;
