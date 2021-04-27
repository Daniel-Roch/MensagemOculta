var mensagemCrip = document.querySelector('#mensagem-traduzir');
var mensagemResultado = document.querySelector('#mensagem-resultado')
var numeroCesar = document.getElementById('input-cesar')


//botão para aparecer codificar ou decodificar
var aparecerJanelaCodificar = document.querySelector('#aparecer-janela-codificar')
var aparecerJanelaDecodificar = document.querySelector('#aparecer-janela-decodificar')
var aparecerCodificar = document.querySelector('.aparecer-codificar')
var aparecerDecodificar = document.querySelector('.aparecer-decodificar')

aparecerJanelaCodificar.addEventListener('click',function(){
    aparecerCodificar.classList.remove('aparecer-invisivel')
    aparecerDecodificar.classList.add('aparecer-invisivel')
})
aparecerJanelaDecodificar.addEventListener('click',function(){
    aparecerDecodificar.classList.remove('aparecer-invisivel')
    aparecerCodificar.classList.add('aparecer-invisivel')
})


//icones para aparecer botoes de criptografar cesar e base64
var botaoCesar = document.querySelector('.cesar-button')
var botaoBase64 = document.querySelector('.base64-button')
var p = document.querySelector('.explic')

var escolhaCodificar = document.querySelector('.escolha-codificar')
escolhaCodificar.addEventListener('change', function(event){
    var retur = event.target.value
    if(retur == 1){
        botaoCesar.classList.remove('invisivel-cesar')
        p.classList.remove('invisivel-cesar')
        numeroCesar.classList.remove('invisivel-cesar')
        botaoBase64.classList.add('invisivel-base64')
    }else if(retur == 2){
        botaoBase64.classList.remove('invisivel-base64')
        botaoCesar.classList.add('invisivel-cesar')
        p.classList.add('invisivel-cesar')
        numeroCesar.classList.add('invisivel-cesar')
    }else if(retur == 'n'){
        botaoBase64.classList.add('invisivel-base64')
        botaoCesar.classList.add('invisivel-cesar')
        p.classList.add('invisivel-cesar')
        numeroCesar.classList.add('invisivel-cesar')
    }
})
//----------------------------------------------------------------

//Botoes para criptografar
botaoCesar.addEventListener('click', (eventCesar) =>{
    eventCesar.preventDefault();
    var textoCripCesar = mensagemCrip.value
    var textoArrCesar = textoCripCesar.split('')
    var numeroCesarRecebido = parseInt(numeroCesar.value)
    //transformei em array só que com tudo separado [d,a,n,i,e,l]
    mensagemResultado.innerText = transformaCesa(textoArrCesar, numeroCesarRecebido)
})
        //função para percorrer cada letra da palavra e somar + 7 com charCodeAt() e retorna com fromCharCode()
function transformaCesa(textoArrCesar, numeroCesarRecebido){
    var palavraCesar = ``
    for(var i = 0; i<textoArrCesar.length ; i++){
        var recebe = textoArrCesar[i].charCodeAt(0) // para poder pegar cada palavra da array, o 0 é a posição
        recebe += numeroCesarRecebido
        var devolve = String.fromCharCode(recebe) //devolve como string
        palavraCesar = palavraCesar + devolve;
    }
    return palavraCesar
}


//Botão de criptografar para Base64
var telaResposta = document.querySelector('.tela2')
var mensagemBase64 = document.querySelector('.mensagem-base64')
var mensagemBase64H2 = document.createElement('h2')

botaoBase64.addEventListener('click', (eventBase64)=>{
    eventBase64.preventDefault();
    var textoCripBase64 = mensagemCrip.value;
    var textoCripBase64Tran = btoa(textoCripBase64);
    mensagemResultado.innerText = textoCripBase64Tran;

    // Esta parte é para criar uma parte ao lado mostrando a mensagem.
    //telaResposta.classList.remove('explicao')
    //mensagemBase64.appendChild(mensagemBase64H2)
    //mensagemBase64H2.classList.add('mensagens-tela-base64')
    //mensagemBase64H2.innerHTML = `${textoCripBase64Tran}`
})
//--------------------------------------------------------------------------------
//Botão de aparecer o traduzir
var explicacaoRevers = document.querySelector('#explicacao-revers')
var inputCesarDec = document.getElementById('input-cesar-dec')

var escolhaDecodificar = document.querySelector('.escolha-decodificar')
escolhaDecodificar.addEventListener('change',function(event){
    var returDecod = event.target.value
    if(returDecod == 1){
        cesarTraducao.classList.remove('invisivel-dec')
        explicacaoRevers.classList.remove('invisivel-dec')
        inputCesarDec.classList.remove('invisivel-dec')
        botaoTraduzirBase64.classList.add('invisivel-dec-base64')
    }else if(returDecod == 2){
        botaoTraduzirBase64.classList.remove('invisivel-dec-base64')
        cesarTraducao.classList.add('invisivel-dec')
        explicacaoRevers.classList.add('invisivel-dec')
        inputCesarDec.classList.add('invisivel-dec')
    }else if(returDecod == 'n'){
        botaoTraduzirBase64.classList.add('invisivel-dec-base64')
        cesarTraducao.classList.add('invisivel-dec')
        explicacaoRevers.classList.add('invisivel-dec')
        inputCesarDec.classList.add('invisivel-dec')
    }
})

//--------------------------------------------------------------------------------
var resultadoDaTraducao = document.querySelector('#resultado-da-traducao')
var mensagemParaDecodificar = document.querySelector('#mensagem-para-decodificar')

//Botao traduzir base64
var botaoTraduzirBase64 = document.querySelector('.base64-traducao')
botaoTraduzirBase64.addEventListener('click', ()=>{
    resultadoDaTraducao.innerText =" "
    var traduzirBase64 = mensagemParaDecodificar.value;
    var textoTraduzidoBase64 = atob(traduzirBase64);
    resultadoDaTraducao.innerText = textoTraduzidoBase64
})

//botao traduzir Cifra de cesar
var cesarTraducao = document.querySelector('.cesar-traducao')
var explicRevers = document.querySelector('.explic-revers').value;
var numeroCesarDec = document.querySelector('.input-cesar-deci')

cesarTraducao.addEventListener('click', function(){
    resultadoDaTraducao.innerText =" "
    var traduzirCesar = mensagemParaDecodificar.value
    var traduzirArrCesar = traduzirCesar.split('')
    var valueNumeroCesarDec = numeroCesarDec.value
    var numeroCesarDecRecebido = parseInt(valueNumeroCesarDec)
    resultadoDaTraducao.innerText = destransformaCesa(traduzirArrCesar, numeroCesarDecRecebido)

})

function destransformaCesa(traduzirArrCesar, numeroCesarDecRecebido){
    var palavraCesar = ``
    var recebe = 0
    for(var i = 0; i<traduzirArrCesar.length ; i++){
        recebe = traduzirArrCesar[i].charCodeAt(0) // para poder pegar cada palavra da array, o 0 é a posição
        recebe = recebe - numeroCesarDecRecebido
        var devolve = String.fromCharCode(recebe) //devolve como string
        palavraCesar = palavraCesar + devolve;
    }
    return palavraCesar
}
