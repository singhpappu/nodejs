var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://mindz:mindz@ds257495.mlab.com:57495/mango_db',['blog']);

router.get('/tasks',function(req,res,next){
    db.blog.find(function(err,tasks) {
        if(err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;