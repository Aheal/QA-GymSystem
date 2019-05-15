var bodyParser = require('body-parser');

var data = [{id:"00253903", name: 'Alejandro Hernandez Alamina', gender:"Male", age: 22, phone:"9931538502", type:"Gold",date:'23/01/2019'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

    app.get('/members', function(req,res){
        res.render('main', {members:data});
    });
    app.post('/members', urlencodedParser, function(req,res){

        console.log(req.body);
        data.push(req.body);
        res.json(data);

    });
    app.delete('/members', function(req,res){});
};