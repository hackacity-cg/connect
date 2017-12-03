$(function(){
    $('#login').click(function(e){
        if($('#senha').val() != ""){
            window.location.href = "./index.html";
        }else{
            alert('loginErrado');
            e.preventDefault();
        }
    });
});