var express = require('express');
var router = express.apiRouter();

router.get('/', function(req,res){
    res.render('index');
});

module.exports = router;