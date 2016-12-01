var express = require('express');
var router = express.Router();

var plivo = require('plivo');
var p = plivo.RestAPI({
    authId: 'MAM2U4ODCYNGU2YTUZOT',
    authToken: 'ZjRhYmIyOTc4ZDIxODgwMGExNmNjNTQzMGJhMDQz'
});





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
        message: "",
        playWave: false
    };
    res.status(200).send(global.globalStatus);
});

router.get('/power', function (req, res, next) {
    global.globalStatus.power = true;
    global.globalStatus.message = "Power is out. You may enter the compartment!";
    global.globalStatus.recommendation1 =  "מתחים נותקו. ניתן להכניס כבאים עם הידרנט";

    res.status(200).send(global.globalStatus);
});

router.get('/isolation', function (req, res, next) {
    global.globalStatus.isolation = true;
    res.status(200).send(global.globalStatus);
});

router.get('/madaz', function (req, res, next) {
    global.globalStatus.madaz = true;
    global.globalStatus.playWave = true;

    var params = {
        'src': '1111111', // Sender's phone number with country code
        'dst' : '972543922559', // Receiver's phone Number with country code
        'text' : "Message from InCo - שריפה במכונה קדמי", // Your SMS Text Message - English
        'url' : "http://example.com/report/", // The URL to which with the status of the message is sent
        'method' : "GET" // The method used to call the url
    };

// Prints the complete response
    p.send_message(params, function (status, response) {
        console.log('Status: ', status);
        console.log('API Response:\n', response);
        console.log('Message UUID:\n', response['message_uuid']);
        console.log('Api ID:\n', response['api_id']);
    });

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
    global.globalStatus.recommendation1 =  "אין לכבות את השריפה עם הידרנט מתחים לא נותקו";
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
    var params = {
        'src': '1111111', // Sender's phone number with country code
        'dst' : '972543922559', // Receiver's phone Number with country code
        'text' : "Message from InCo - שריפה במכונה קדמי", // Your SMS Text Message - English
        'url' : "http://example.com/report/", // The URL to which with the status of the message is sent
        'method' : "GET" // The method used to call the url
    };

// Prints the complete response
    p.send_message(params, function (status, response) {
        console.log('Status: ', status);
        console.log('API Response:\n', response);
        console.log('Message UUID:\n', response['message_uuid']);
        console.log('Api ID:\n', response['api_id']);
    });

    res.status(200).send({success: 'true'});
});

module.exports = router;
