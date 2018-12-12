var express = require('express');
var router = express.Router();

var messages = [
  {message: "You bet!", tone: "positive"},
  {message: "Don't count on it!", tone: "negative"},
  {message: "Maybe!", tone: "neutral"}
];

// GET 8-ball page
router.get('/8-ball', function(req, res, next) {
  res.locals.message = messages[Math.floor(Math.random() * messages.length)];
  res.render('magic/8-ball');
});

module.exports = router;