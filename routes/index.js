const express = require('express');
const router = express.Router();
const middlewares = require('../middlewares/middlewares.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello World');
});

router.get('/userinfo', middlewares.first, middlewares.second, middlewares.third);

module.exports = router;
