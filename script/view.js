
function queryString(parameter) {  
            var loc = location.search.substring(1, location.search.length);   
            var param_value = false;   
            var params = loc.split("&");  
            for (i=0; i<params.length;i++) {   
                param_name = params[i].substring(0,params[i].indexOf('='));   
                if (param_name == parameter) {                                          
                    param_value = params[i].substring(params[i].indexOf('=')+1)   
                }   
            }   
            if (param_value) {   
                return param_value;   
            }   
            else {   
                return "nao";   
            }   
      }
$(function(){
    var dados = $.parseJSON($('#dado').val());
    for(var i = 0; i<dados.length; i++){
        var variavel = queryString(i);
        if(variavel != 'nao'){
            $('#nome').text(dados[i]['nome']);
            $('#coord').text(dados[i]['coor']);
            $('#desc').text(dados[i]['desc']);
            $('#local').text(dados[i]['local']);
            $('#hor').text("13:30 as 15:00");
            $('#vagas').text(dados[i]['vagas']);
            $('#imag').attr('src', dados[i]['url'])
            $('#tituloOficina').text(dados[i]['nome']);
        }
    }
});