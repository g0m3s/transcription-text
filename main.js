var texto =  document.getElementById('texto-transcrito')
var botao =  document.getElementById('iniciar')
var aperto = 1

var value = 0

function verificaPausa () {

    aperto++
    value = aperto / 2
    botao.innerHTML = "Pausar"

    if (aperto == 2)

        texto.innerHTML = ""

    if (Number.isInteger(value)){

        botao.innerHTML = "Pausar"
        ouve (1)

    }
    else{

        botao.innerHTML = "Iniciar"
        ouve (0)

    }

}

function ouve (estado) {

    const reconhecimento = new webkitSpeechRecognition()
    reconhecimento.lang = "pt-BR"
    reconhecimento.interimResults = true
    reconhecimento.continuous = true
    reconhecimento. start()
    reconhecimento.onresult = (event) => {

        for (let i = event.resultIndex; i < event.results.length; i++) {


            if (event.results[i].isFinal && estado == 1){

               texto.innerHTML = texto.innerHTML + " " + `${event.results[i][0].transcript.trim()}`
               console.log(estado)

            }
            
        }

    }

}

// let copiarTexto = ()  => {

//     texto.select()
//     document.execCommand('copy')

// }

new Clipboard('.btn')

$("#texto-transcrito").click(function(){
    $(this).select();
    document.execCommand('copy');
  })


/* 

## FAZER COM QUE QUANDO VOCE APERTE O BOTAO UMA VEZ, ELE TRANSCREVA ATE VOCE APERTAR O BOTAO DE NOVO, QUE E QUANDO ELE "PAUSA" E ESPERA QUE VOCE APERTE O BOTAO NOVAMENTE   xxOKxx

## Texto estoura a div quando ele e mt grande   xxOKxx

##fazer opcao de copiar o texto digitado para a area de transferencia ou enviar por email/ whatsapp  xxOKxx

##dar opcao de apagar - tudo ou so a ultima parte transcrita -

*/