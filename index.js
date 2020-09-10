/*recibir la operacion
dividirla segun el simbolo (los numbs)
armar la operacion en lenguaje
mostrar resultado*/

var aux = require("./aux");
var operaciones = require("./operaciones");

var operacionAEvaluar = (process.argv[2]);
var objetoOperacion = aux.evaluarOperacion(operacionAEvaluar);
var resultado = operaciones.ejecutarOperacion(objetoOperacion);

console.log(resultado);