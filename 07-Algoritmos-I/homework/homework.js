'use strict'
// No cambies los nombres de las funciones.

function factorear(num) { //recursion
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  var i = 2;
  while(num !== 1){
    if(num % i === 0){
      arr.push(i);
      num = num / i;
      
    } else{
      i = i + 1;
    }
  }
  return arr; 
}
      

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
  // 5< 1, false, cbio 1 y 5
  //    5<4 false, cambio 5 y 4
  //        5<2 false, cbio 2 y 5
  //             5<5 true
  // arr [1, 4, 2, 5, 8]
  var esMenor = true;
  while(esMenor){
    esMenor = false;
    for(var i = 0; i<array.length-1; i++){
      if(array[i]>array[i+1]){
        var temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        esMenor = true;
      }
    }
  }
 return array; 

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
        // ....i extraer y ++ i
        //  j para bucle y -- 
  for(var i = 1; i<array.length; i++){
    var extract = array[i];
    var j = i - 1;
    while(j >= 0 && array[j] > extract){
      array[j+1] = array[j]; //no necesariamente i es igual a j+1
      j--
    }
    array[j+1] = extract; 
  }
  return array
}


function selectionSort(array, arrayFinal = []) { 
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 0) return arrayFinal
  if(array[0] === Math.min(...array)){  //si el primero es el mas bajo
        arrayFinal.push(array[0])  // pusheas al array nvo
        array.shift()  // y lo sacas para que siga comparando
        return selectionSort(array, arrayFinal); //array mas chico que vuelva a ejecutarse
    } else{
        var extract = array.shift()  //lo extraes
        arrayFinal.push(Math.min(...array)); //pusheas el minimo de lo que queda
        array[array.indexOf(Math.min(...array))] = extract; //pisas el indice donde estaba el menor
        return selectionSort(array, arrayFinal);
    }
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
