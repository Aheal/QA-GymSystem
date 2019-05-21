var bodyParser = require('body-parser'); 
var logic = require('../logic/lib')

var data = {user:'Aheal', pass:'123'};
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){
    app.get('/login',function(req,res){
        res.render('login')
    });
    app.post('/login', urlencodedParser ,function(req,res){
        console.log(req.body); 
        result = logic.login(req.body,data); 
        res.json(result);
    })
}