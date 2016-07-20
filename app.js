var express = require("express"); 
var morgan = require("morgan"); 

var app = express(); 
app.use(morgan()); 

app.use(function(req, res, done){
	// var status; 
	// if(){
	// 	status === 
	// }
	console.log(req.method + ' ' + req.originalUrl + ' '); 
	done(); 
}); 

app.use('/special', function(req, res, done){
	res.send('you reached the special area');
	done();
});


app.listen(3000, function(){
	console.log("app started")
}); 


