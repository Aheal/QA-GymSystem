var express = require('express'); 
var membersController = require('./controllers/membersController');
var loginController = require('./controllers/loginController')

var app = express(); 

app.set('view engine', 'ejs'); 

app.use(express.static('./public')); 

membersController(app);
loginController(app);

app.listen(3000); 
console.log("You are listening on port 3000...")