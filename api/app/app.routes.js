var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.redirect('http://localhost:4200');
});

module.exports = router;