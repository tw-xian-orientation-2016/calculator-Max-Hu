var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

router.post('/addition', function(req, res) {
    var number1 = parseFloat(req.body.number1);
    var number2 = parseFloat(req.body.number2);
    var result = number1 + number2;
    res.send(result.toString());
});

router.post('/subtraction', function(req, res) {
    var number1 = parseFloat(req.body.number1);
    var number2 = parseFloat(req.body.number2);
    var result = number1 - number2;
    res.send(result.toString());
});

router.post('/multiplication', function(req, res) {
    var number1 = parseFloat(req.body.number1);
    var number2 = parseFloat(req.body.number2);
    var result = number1 * number2;
    res.send(result.toString());
});

router.post('/division', function(req, res) {
    var number1 = parseFloat(req.body.number1);
    var number2 = parseFloat(req.body.number2);
    var result = number1 / number2;
    res.send(result.toString());
});

router.post('/percent', function(req, res) {
    var number1 = parseFloat(req.body.number1);
    var result = number1 / 100;
    console.log(result);
    res.send(result.toString());
});

router.post('/reserve', function(req, res) {
    var number1 = parseFloat(req.body.number1);
    var result = 0 - number1;
    res.send(result.toString());
});
module.exports = router;
