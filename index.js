var mensagemCrip = document.querySelector('#mensagem-traduzir');
var mensagemResultado = document.querySelector('#mensagem-resultado')
var resultadoDaTraducao = document.querySelector('#resultado-da-traducao')

var botaoCesar = document.querySelector('[data-cesar]')
var botaoBase64 = document.querySelector('[data-base64]')


//Botoes para criptografar
botaoCesar.addEventListener('click', (eventCesar) =>{
    eventCesar.preventDefault();
    var textoCripCesar = mensagemCrip.value
 
})

botaoBase64.addEventListener('click', (eventBase64)=>{
    eventBase64.preventDefault();
    var textoCripBase64 = mensagemCrip.value;
    var textoCripBase64Tran = btoa(textoCripBase64);
    mensagemResultado.innerText = textoCripBase64Tran 

})

//Botao traduzir

var botaoTraduzirBase64 = document.querySelector('[data-base64-traducao]')
botaoTraduzirBase64.addEventListener('click', (eventTraduzirBase)=>{
    eventTraduzirBase.preventDefault();
    var traduzirBase64 = mensagemResultado.value;
    var textoTraduzidoBase64 = atob(traduzirBase64);
    resultadoDaTraducao.innerText = textoTraduzidoBase64
})