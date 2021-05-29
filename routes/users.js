var express = require('express');
var router = express.Router();
const config = require('../config')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource' + config.appkey);
});

module.exports = router;
