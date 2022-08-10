'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var sum = 0;
    for (var i = 0; i < num.length; i++) {
       sum += 2 ** (num.length - 1 - i) * num[i];
    }
    return sum;
}




function DecimalABinario(num) {
  // tu codigo aca
  var binario = [];

  while (num !== 0){
    binario.unshift(num % 2);
    num = Math.floor(num/2);
  } 
  
  return binario.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}