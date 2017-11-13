var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require(__dirname+'/app/app.routes.js');
var tasks = require(__dirname+'/app/modules/tasks/tasks.routes.js');

var app = express();
var port = 3000;
// set view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// set static path 

app.use(express.static(path.join(__dirname,'blog')));

// Body parser 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port,function() {
    console.log('Server started on port '+port);
});