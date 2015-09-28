var express=require('express');
var app=express();

app.use(express.static('TypeScript'));

var obj=[{desc:'Server is sending JSON',name:'profile'}];

app.get('/Profile', function (req, res,next) {
  	res.json(obj);
  	next();
});

app.get('/home', function (req, res,next) {
	var arr = ["Server is reponding home data"];
  	res.send(arr);
  	next();
});

app.get('/about', function (req, res,next) {
	var arr = ["Server is sending about data"];
  	res.send(arr);
  	next();
});

app.get('/contact', function (req, res,next) {
	var arr = ["Server is replying about data"];
  	res.send(arr);
  	next();
});

app.get('/help', function (req, res,next) {
	var arr = ["Server is sending help data"];
  	res.send(arr);
  	next();
});

app.listen(3000,function(){
	console.log("listening at port 3000");
});