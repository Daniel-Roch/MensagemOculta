var mensagemCrip = document.querySelector('#mensagem-traduzir');
var mensagemResultado = document.querySelector('#mensagem-resultado')
var numeroCesar = document.getElementById('input-cesar')


//icones para aparecer botoes de criptografar cesar e base64
var cesarIcon = document.querySelector('#cesar-icon')
var base64Icon = document.querySelector('#base64-icon')
var botaoCesar = document.querySelector('.cesar-button')
var botaoBase64 = document.querySelector('.base64-button')
var p = document.querySelector('.explic')

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
//----------------------------------------------------------------

//Botoes para criptografar
botaoCesar.addEventListener('click', (eventCesar) =>{
    eventCesar.preventDefault();
    mensagemResultado.innerHTML =" "
    var textoCripCesar = mensagemCrip.value
    var textoArrCesar = textoCripCesar.split('')
    var numeroCesarRecebido = parseInt(numeroCesar.value)
    //transformei em array só que com tudo separado [d,a,n,i,e,l]
    mensagemResultado.textContent = transformaCesa(textoArrCesar, numeroCesarRecebido)
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
    mensagemResultado.innerText =""
    var textoCripBase64 = mensagemCrip.value;
    var textoCripBase64Tran = btoa(textoCripBase64);
    mensagemResultado.textContent = textoCripBase64Tran 

})
//--------------------------------------------------------------------------------
//Botão de aparecer o traduzir
var cesarIconDesc = document.querySelector('#cesar-icon-desc')
var base64IconDesc = document.querySelector('#base64-icon-desc')
var explicacaoRevers = document.querySelector('#explicacao-revers')
var inputCesarDec = document.getElementById('input-cesar-dec')

cesarIconDesc.addEventListener('click', function(){
    cesarTraducao.classList.remove('invisivel-dec')
    explicacaoRevers.classList.remove('invisivel-dec')
    inputCesarDec.classList.remove('invisivel-dec')
    botaoTraduzirBase64.classList.add('invisivel-dec-base64')

})
base64IconDesc.addEventListener('click',function(){
    botaoTraduzirBase64.classList.remove('invisivel-dec-base64')
    cesarTraducao.classList.add('invisivel-dec')
    explicacaoRevers.classList.add('invisivel-dec')
    inputCesarDec.classList.add('invisivel-dec')
})

//--------------------------------------------------------------------------------
var resultadoDaTraducao = document.querySelector('#resultado-da-traducao')
//Botao traduzir base64

var botaoTraduzirBase64 = document.querySelector('.base64-traducao')
botaoTraduzirBase64.addEventListener('click', ()=>{
    resultadoDaTraducao.innerText =" "
    var traduzirBase64 = mensagemResultado.value;
    var textoTraduzidoBase64 = atob(traduzirBase64);
    resultadoDaTraducao.innerText = textoTraduzidoBase64
})

//botao traduzir Cifra de cesar
var cesarTraducao = document.querySelector('.cesar-traducao')
var explicRevers = document.querySelector('.explic-revers').value;
var numeroCesarDec = document.querySelector('.input-cesar-deci')

cesarTraducao.addEventListener('click', function(){
    resultadoDaTraducao.innerText =" "
    var traduzirCesar = mensagemResultado.value
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
