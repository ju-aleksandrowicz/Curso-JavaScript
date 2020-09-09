var tablaDelDos = { //objeto numbers
    porUno:2,
    porDos:4,
    porTres:6,
    porCuatro:8,
    porCinco:10,
    porSeis:12,
    porSiete:14,
    porOcho:16,
    porNueve:18,
    porDiez:20
}
console.log("Dos...");
console.log(tablaDelDos);


var segundoObjeto = { //objeto string, numbers, arrays
    frase:"Frase de prueba",
    unNumero:10,
    unaLista:["Un","Dos","Tres"]
}
console.log(segundoObjeto);


var libro = { //objeto string, objeto
    nombre:"Blanca Nieves",
    datos : {
        año:2005,
        autor:"Maria Perez",
        ilustrador:"Maximo Garcia"
    }
}
console.log(libro);
console.log("El ilustador se llama: ",libro.datos.ilustrador);


var fichaTecnica = { //objeto objeto, funcion
    datos : {
        precio:2500,
        precioConIVA:2500*1.21,
        gama:"Alta",
        garantiaEnAños:2,
    },
    precioCF : function () {
        return this.precioConIVA;
    }
}
console.log(fichaTecnica.precioCF);


    constructor(nombre,dondeVIVE,ejemplares,peso){ //class Animal { //clase animal
        this.nombre = nombre;
        this.dondeVIVE = dondeVIVE;
        this.ejemplares = ejemplares;
        this.peso = peso;
    }
}
var unTigre = new Animal("Tigre","Selva",30,"400 kg");
console.log(unTigre.dondeVIVE);
