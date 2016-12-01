var express = require('express');
var router = express.Router();


var globalStatus = {
    power: false,
    isolation: false,
    madaz: false,
    reportOut: false,
    firemen: false,
    recommendation1:  "אין לכבות את השריפה עם הידרהטץ מתחים לא נותקו",
    recommendation2: "",
    recommendation3: "",
    message: ""
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

// router.post('/updateStatus', function (req, res, next) {
//     global.globalStatus = req.body;
//     res.status(200).send(global.globalStatus);
// });

router.get('/reset', function (req, res, next) {
    global.globalStatus = {
        power: false,
        isolation: false,
        madaz: false,
        reportOut: false,
        firemen: false,
        recommendation1: "",
        recommendation2: "",
        recommendation3: "",
        message: ""
    };
    res.status(200).send(global.globalStatus);
});

router.get('/power', function (req, res, next) {
    global.globalStatus.power = true;
    global.globalStatus.message = "Power is out. You may enter the compartment!";
    res.status(200).send(global.globalStatus);
});

router.get('/isolation', function (req, res, next) {
    global.globalStatus.isolation = true;
    res.status(200).send(global.globalStatus);
});

router.get('/madaz', function (req, res, next) {
    global.globalStatus.madaz = true;
    res.status(200).send(global.globalStatus);
});

router.get('/reportOut', function (req, res, next) {
    global.globalStatus.reportOut = true;
    res.status(200).send(global.globalStatus);
});

router.get('/firemen', function (req, res, next) {
    global.globalStatus.firemen = true;
    res.status(200).send(global.globalStatus);
});

router.get('/recommendation1', function (req, res, next) {
    global.globalStatus.recommendation1 =  "אין לכבות את השריפה עם הידרהטץ מתחים לא נותקו";
    res.status(200).send(global.globalStatus);
});

router.get('/recommendation2', function (req, res, next) {
    global.globalStatus.recommendation2 =  "מתחים נותקו. ניתן להכניס כבאים עם הידרנט";
    res.status(200).send(global.globalStatus);
});

router.get('/recommendation3', function (req, res, next) {
    global.globalStatus.recommendation3 = "הודעה הועברה לגורמי חוץ";
    res.status(200).send(global.globalStatus);
});

router.get('/message', function (req, res, next) {
    global.globalStatus.message = "Power is out. You may enter the compartment!";
    res.status(200).send(global.globalStatus);
});

router.get('/sendSMS', function (req,res,next) {
    var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
    c.Messages.send({text: 'test message', phones:'972544668186'}, function(err, res){
        console.log('Messages.send()', err, res);
    });
});

module.exports = router;
