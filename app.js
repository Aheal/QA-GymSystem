var express = require('express'); 
var membersController = require('./controllers/membersController');

var app = express(); 

app.set('view engine', 'ejs'); 

app.use(express.static('./public')); 

membersController(app);

app.listen(3000); 
console.log("You are listening on port 3000...")