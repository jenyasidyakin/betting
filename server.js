

var express = require("express");

var app = express();

var PORT = 80;

var cors = require('cors');

app.use(cors());


app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/',function(req,res){
	console.log("get /");
	res.json({'status':200})
})

app.get('/key1',function(req,res){
	console.log("get key1");
	res.json({"status":200});
})
app.get('/key2',function(req,res){
	console.log("get key2");
	res.json({"status":200});
})

app.post('/key1',function(req,res){
	    console.log("post key1");
		console.log(req.body);
		res.json({'status':200})
})
app.post('/key2',function(req,res){
		console.log("post key2");
		console.log(req.body);
		res.json({'status':200})
})

app.post('/');


app.listen(PORT,function(err){
	if(!err){
		console.log("server running on port " + PORT);
	}else{
		console.log(err);
	}
})