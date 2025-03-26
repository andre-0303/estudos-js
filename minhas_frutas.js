let frutas = ['banana', 'maçã', 'uva', 'laranja', 'manga']; 

let primeiraFruta = frutas[0]; 
let ultimaFruta = frutas[4]; 

console.log(`${primeiraFruta} e ${ultimaFruta}`);

frutas[1] = 'melancia'; //modifica um elemento no array

frutas.push('Cajú'); //adiciona um elemento no final do array

frutas.shift(); //remove o primeiro elemento do array
console.log(frutas);

frutas.forEach(function(frutas) {
    console.log(frutas);
})