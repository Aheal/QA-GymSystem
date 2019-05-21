$(document).ready(function(){ 

    $('form').on('submit', function(){

      console.log('submit!')

        var user = $('#user');
        var pass = $('#pass');

        var auth = {user:user.val(), pass:pass.val()};

        console.log(auth)
        $.ajax({
          type: 'POST',
          url: '/login',
          data: auth,
          success: function(data){
            //do something with the data via front-end framework
            notification(data);
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

    function notification(response){
        if(response === 'failure')
            $("#notification").removeClass("hide");
        else 
            window.location.href="http://localhost:3000/members";
    }
  
  });