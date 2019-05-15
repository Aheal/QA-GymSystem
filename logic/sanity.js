module.exports.noNumbers = function(text){
    var re = /[0-9]/g; 

    var newText = text.replace(re, ''); 

    return newText;
} 

module.exports.noLetters = function(number){
    var re = /[A-Za-z]/g; 

    var newText = number.replace(re, ''); 

    return newText;
}