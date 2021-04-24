var mensagemCrip = document.querySelector('#mensagem-traduzir');
var mensagemResultado = document.querySelector('#mensagem-resultado')
var resultadoDaTraducao = document.querySelector('#resultado-da-traducao')
var cesarIcon = document.querySelector('#cesar-icon')

var base64Icon = document.querySelector('#base64-icon')
var p = document.querySelector('.explic')
var numeroCesar = document.getElementById('input-cesar')

var botaoCesar = document.querySelector('.cesar-button')


var botaoBase64 = document.querySelector('.base64-button')

//icones para aparecer botoes de criptografar cesar e base64
cesarIcon.addEventListener('click', function(){
    botaoCesar.classList.remove('invisivel-cesar')
    p.classList.remove('invisivel-cesar')
    numeroCesar.classList.remove('invisivel-cesar')
    botaoBase64.classList.add('invisivel-base64')

})
base64Icon.addEventListener('click',function(){
    botaoBase64.classList.remove('invisivel-base64')
    botaoCesar.classList.add('invisivel-cesar')
    p.classList.add('invisivel-cesar')
    numeroCesar.classList.add('invisivel-cesar')
})

//Botoes para criptografar
botaoCesar.addEventListener('click', (eventCesar) =>{
    eventCesar.preventDefault();
    var textoCripCesar = mensagemCrip.value
    var textoArrCesar = textoCripCesar.split('')
    numeroCesarRecebido = parseInt(numeroCesar.value)
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

botaoBase64.addEventListener('click', (eventBase64)=>{
    eventBase64.preventDefault();
    var textoCripBase64 = mensagemCrip.value;
    var textoCripBase64Tran = btoa(textoCripBase64);
    mensagemResultado.innerText = textoCripBase64Tran 

})

//Botao traduzir base64

var botaoTraduzirBase64 = document.querySelector('[data-base64-traducao]')
botaoTraduzirBase64.addEventListener('click', (eventTraduzirBase)=>{
    eventTraduzirBase.preventDefault();
    var traduzirBase64 = mensagemResultado.value;
    var textoTraduzidoBase64 = atob(traduzirBase64);
    resultadoDaTraducao.innerText = textoTraduzidoBase64
})

//botao traduzir Cifra de cesar
