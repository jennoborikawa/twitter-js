var express = require("express"); 
// var morgan = require("morgan"); 
var swig = require('swig');
var routes = require('./routes'); 
var bodyParser = require('body-parser');

//express func creates an app instance 
var app = express(); 
// app.use(morgan()); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')


app.use(function(req, res, done){
	console.log(req.method + ' ' + req.originalUrl + ' '); 
	done(); 
}); 

app.use('/special', function(req, res, done){
	res.send('you reached the special area');
	done();
});

app.use('/', routes);  //register routes as middleware for all routes beg w/ / 

app.use(express.static('public')); 

// swig.setDefaults({cache: false}); 

// app.get('/', function(req, res){
// 	res.render('index', { foo: 'bar', people: [{name: 'michael'}]});
// });
// app.get('/', function(req, res){
// 	// res.render('index', {foo: 'bar', })
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render('index', {title: 'Hall of Fame', people: people}); 
// }); 


app.listen(3000, function(){
	console.log("app started")
}); 


