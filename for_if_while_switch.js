var lista = [];

for(var posicion = 0; posicion < 30; posicion++){
    function getRandomInt(min,max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var numeroRandom = getRandomInt(0,100);
    lista.push(numeroRandom);
}
console.log(lista);

function soloPares(lista){
    var listaPares = [];
    var posi = 0;
    
    while(posi < lista.length){
        if(num = lista[posi] % 2 == 0){
            listaPares.push(lista[posi]);
        }
        posi++;
    }
    return listaPares;
}

var listaPares = soloPares(lista);

console.log(listaPares);
