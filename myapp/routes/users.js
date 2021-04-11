const express = require('express');
const router = express.Router();

//Middleware is a function that executes every time a specific request is hit


/* GET users listing. */
router.get('/', function(req, res, next) {
  const responseObj = { test: 23};
  res.send(responseObj);
});

module.exports = router;
