var passaValor= function(valor)
{
    window.location = "view.html?"+valor+"=posicao";
}
$(function(){
    $('.informa').click(function(e){
        passaValor($(this).val());
    });
});