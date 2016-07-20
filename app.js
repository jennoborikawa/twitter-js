var express = require("express"); 
var morgan = require("morgan"); 
var swig = require('swig');

var app = express(); 
app.use(morgan()); 

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(function(req, res, done){
	// var status; 
	// if(){
	// 	status === 
	// }
	console.log(req.method + ' ' + req.originalUrl + ' '); 
	done(); 
}); 

app.get('/', function(req, res){
	res.render('index', { foo: 'bar', people: [{name: 'michael'}]});
});

app.use('/special', function(req, res, done){
	res.send('you reached the special area');
	done();
});


app.listen(3000, function(){
	console.log("app started")
}); 


