var express = require('express'); 
var router = express.Router(); 

var tweetBank = require('../tweetBank');

// router.use('/', function(req, res, done){
// 	res.send("under construction"); 
// }); 

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm:true } );
});

router.get('/users/:name', function(req, res){
	var name = req.params.name; 
	var list = tweetBank.find({name: name}); 
	res.render('index', { title: 'Twitter.js - Posts by ' + name, tweeter:name, tweets: list, showForm:true})
}); 

router.get('/tweets/:id', function(req, res){
	var id = req.params.id*1; 
	var tweet = tweetBank.find({id: id}); 
	res.render('index', { title: 'Twitter.js - Posts by ' + id, tweets: tweet})
}); 

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var content = req.body.content;
  tweetBank.add(name, content);
  res.redirect('/');
});



module.exports = router;