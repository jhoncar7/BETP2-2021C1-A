/**
 * Dada un conjunto de medias debe encontrar la cantidad de pares por color. 
 * Se proporciona un array el cual contiene el codigo de color de las medias
 * Determinar el numero maximo de pares del mismo color que se puede formar
 *
 */

/**
 * 
 * @param {Array} colorSocks 
 * @return {Number} 
 */
const sockMerchant = function(colorSocks){
    let arregloOrdenado =  colorSocks.sort();
    let contador = 0;

    for (let i = 0; i < arregloOrdenado.length; i++) {
        if(arregloOrdenado[i] == arregloOrdenado[i+1]){
            contador++;
            i = i+1;
        }
    }
    return `La cantidad de pares de medias encontradas son: ${contador}`;
}

// TESTS
// console.log(sockMerchant([1,2,1,2,1,3,2]) === 2);
// console.log(sockMerchant([10,20,20,10,10,30,50,10,20]) === 3);

console.log(sockMerchant([1,2,1,2,1,3,2]));
console.log(sockMerchant([10,20,20,10,10,30,50,10,20]));
