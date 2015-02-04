
// builtin
var fs = require('fs');

// 3rd party
var express = require('express');
var hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials/');

// set the view engine to use handlebars
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    res.locals = {
        some_value: 'foo bar',
        list: ['cat', 'dog']
    }

    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
console.log("demoMania listening on port 3000");
