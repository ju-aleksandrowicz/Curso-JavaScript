function evaluarOperacion(textoAEvaluar){
var posicionDelSimbolo = textoAEvaluar.indexOf("+")

if(posicionDelSimbolo==0)
{
    var posicionDelSimbolo = textoAEvaluar.indexOf("-") 
}
if(posicionDelSimbolo == -1)
{
    var posicionDelSimbolo = textoAEvaluar.indexOf("*")
}
if(posicionDelSimbolo ==-1)
{
    var posicionDelSimbolo = textoAEvaluar.indexOf("/")
}

var primeraParte = textoAEvaluar.slice(0,posicionDelSimbolo);
var segundaParte = textoAEvaluar.slice(posicionDelSimbolo+1);
var simbolo = textoAEvaluar[posicionDelSimbolo]

primeraParte = parseInt(primeraParte);
segundaParte = parseInt(segundaParte);

    return {
        numeros:[primeraParte,segundaParte],
        operacion: simbolo
    }
}

module.exports = {
    evaluarOperacion: evaluarOperacion
}
