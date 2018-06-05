var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({greeting: 'Welcome to Demo'});
});

app.get('/users', (req, res) => {
  var json = {
	  success: true,
	  data: [
		{email: 'test@gmail.com', age: 20}
	  ]
  }
  res.json(json);
});

app.get('/userById', (req, res) => {
  console.log(req.query);
  var json = {
	  success: true,
	  data: [
		{email: 'test@gmail.com', age: 20}
	  ]
  }
  res.json(json);
});

app.post('/addUser', (req, res) => {
	console.log(req.query);
	console.log(req.body);
	console.log(req.body.empid);
	console.log(req.params);
	res.send('sucess');
});

app.listen(3000);