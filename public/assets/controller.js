$(document).ready(function(){ 

    $('form').on('submit', function(){

      console.log('submit!')

        var rand1 = Math.floor(Math.random() * (100 - 1)) + 1;
        var rand2 = Math.floor(Math.random() * (100 - 1)) + 1;
        var rand3 = Math.floor(Math.random() * (100 - 1)) + 1;

        var id = "00" + rand1 + rand2 + rand3 ;
        var name = $('#name');
        var gender = $('#gender');
        var age = $('#age');
        var phone = $('#phone');
        var type = "Gold" 
        var date = "23/01/2019"

        var members = {id: id, name: name.val(), gender: gender.val(), age: age.val(), phone:phone.val(), type:type, date:date};
        console.log(members)
        $.ajax({
          type: 'POST',
          url: '/members',
          data: members,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });