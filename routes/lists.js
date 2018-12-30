var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var list = ["item1", "item2", "item3", "item4"];
  res.json(list);
  console.log('Sent list of items');
});

module.exports = router;
