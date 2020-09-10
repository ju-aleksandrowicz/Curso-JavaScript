function ejecutarOperacion(objetoOperacion){
    if(objetoOperacion.operacion == "+"){
        return sumar(objetoOperacion.numeros);}
    else if(objetoOperacion.operacion == "-"){
        return restar(objetoOperacion.numeros);}
    else if (objetoOperacion.operacion == "*"){
        return multiplicar(objetoOperacion.numeros);}
    else if (objetoOperacion.operacion == "/"){
        return dividir(objetoOperacion.numeros);}
    }

function sumar(numeros){
    return numeros[0] + numeros[1];
}

function restar(numeros){
    return numeros[0] - numeros[1];
}

function multiplicar(numeros){
    return numeros[0] * numeros[1];
}

function dividir(numeros){
    return numeros[0] / numeros[1];
}

module.exports = {
    ejecutarOperacion: ejecutarOperacion
}
