var aux = require("./aux");
var operaciones = require("./operaciones");

var operacionAEvaluar = (process.argv[2]);
var objetoOperacion = aux.evaluarOperacion(operacionAEvaluar);
var resultado = operaciones.ejecutarOperacion(objetoOperacion);

console.log(resultado);
