var db = require('./db');

module.exports.login = function(data){
    database = db.getPass(data.user);
    return data.pass === database.pass ? 'success' : 'failure';
}