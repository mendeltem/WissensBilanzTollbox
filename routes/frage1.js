var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('frage1',{ progress : 'width:10%'});
});

module.exports = router;
