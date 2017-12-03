$(function(){
var dados = $.parseJSON($('#dado').val());
function criarHoriario(horarios){
    // var retorno = '<p><b>Horarios: </></p><br>';
    var retorno = ''; 
    for(var h = 0; h<horarios.length; h++){
        // retorno += "<p> " +horarios[i] + "</p><br>";
        retorno += horarios[h]['hor'+h] = ", ";
    }
    return retorno;
}

for(var i = 0; i<dados.length; i++){
    var oficinas = [];
    var imagem =  [];
    oficinas.coor = dados[i]['coor'];
    oficinas.local = dados[i]['local'];
    oficinas.hor = dados[i]['hor'];
    oficinas.vagas = dados[i]['vagas'];
    oficinas.desc = dados[i]['desc'];
    imagem.img = dados[i]['url'];
    imagem.nome = dados[i]['nome'];
    var horario = criarHoriario(oficinas.hor);
    var data = "<div onclicked=\"viewOficina("+i+")\" class='w3-half'><img width='30%' height='30%'  src=\""+imagem.img +"\">\
    <h1 >Descrição</h1>\
    <p>\
      <b>Nome:</b>\
      <td ><label>" + imagem.nome + "</label></td>\
    </p>\
    <p>\
      <b>Coordenador:</b>\
      <label class=\"coord\"> "+ oficinas.coor + "</label>\
    </p>\
    <button type=\"button\" class=\"btn btn-primary inscrever\"> inscrever </button><button type=\"button\" class=\"btn btn-info informa\" value="+ i+ "> informoções </button> </div>";
    $('.conteudo').append(data);
}
$('.inscrever').click(function(){
    alert('Inscrito com sucesso');
});
});