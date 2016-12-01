var express = require('express');
var router = express.Router();


var globalStatus = {
    event: {location: 'Hartom', type: 'Fire' },
    missingPeople: false
};

global.globalStatus = globalStatus;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getStatus', function(req, res, next) {
    res.status(200).send(global.globalStatus);
    //res.render('index', { title: 'hello Yossilevich' });
});

router.post('/updateStatus', function (req, res, next) {
    global.globalStatus = req.body;
    res.status(200).send(global.globalStatus);
});


router.get('/madaz', function (req, res, next) {
    global.globalStatus.madaz = true;
    res.status(200).send(global.globalStatus);
});


router.get('/power', function (req, res, next) {
    global.globalStatus.power = true;
    res.status(200).send(global.globalStatus);
});

router.get('/sendSMS', function (req,res,next) {
    var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
    c.Messages.send({text: 'test message', phones:'972544668186'}, function(err, res){
        console.log('Messages.send()', err, res);
    });
});

module.exports = router;
