// modules =================================================
var path = require("path");
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// configuration ===========================================
var port = process.env.PORT || 8080; // set our port

app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(path.join(__dirname, 'public'))); // set the static files location /public/img will be /img for users

// routes ==================================================
//DEFAULT ROUTE
app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname, 'public/index.html'));
});

app.use(function(req, res) {
    res.sendfile(path.join(__dirname, 'public/index.html'));
});

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); // shoutout to the user
exports = module.exports = app; // expose app
