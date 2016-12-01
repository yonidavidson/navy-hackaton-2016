var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/helloYossi', function(req, res, next) {
  var globalStatus = {
      event: {location: 'Hartom', type: 'Fire' },
      missingPeople: false
  };
    res.status(200).send(globalStatus);
    //res.render('index', { title: 'hello Yossilevich' });
});
module.exports = router;
