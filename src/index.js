console.log("index.js");

setTimeout(() => {
    console.log('mensajde con timer de 7 segundos..');
 }, 7000)

import { aRecibos } from "./modelos/recibos.js";

//Recorrer e imprimir en terminal con el metodo forEach, mostrando cliente e importe
aRecibos.forEach(recibo => {
    console.log(recibo.cliente); 
    console.log(recibo.importe);
});

//Ordenar por importe utilizando sort, mostrar el resultado en terminal
console.log("Array ordenado por importe:");
const aOrdenadoPorImporte = [aRecibos.sort(function (a, b) {
    if (a.importe > b.importe) {
      return 1;
    }
    if (a.importe < b.importe) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })]

console.log(aOrdenadoPorImporte);

//Clientes que empiezan con la letra "R", usando Filter
console.log("Clientes que empiezan con la letra R, usando Filter:");
const aFiltradosPorR = aRecibos.filter(recibo=> recibo.cliente[0] === 'R');
console.log(aFiltradosPorR);

//Nuevo array con la misma estructura de aRecibos, pero aumentando un 30% el importe
const aAumentado = aRecibos.filter(recibo=> recibo.importe += recibo.importe*0.30);
console.log(aAumentado);
