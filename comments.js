// Create web server 
// Run: node comments.js
// Test: curl -d "user=John&comment=This is a comment" http://localhost:8080/comments
// Test: curl http://localhost:8080/comments

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

var comments = [];

app.post('/comments', function(req, res) {
	comments.push(req.body);
	res.end('Thank you for your comment');
});

app.get('/comments', function(req, res) {
	res.json(comments);
});

app.listen(8080);