//arrays - coleção de dados (lista)
// let frutas = ['banana', 'maçã', 'uva', 'laranja'];

let cores = ['Azul', 'Amarelo', 'Vermelho', 'Preto', 'Branco', 'Verde'];

let primeiraCor = cores[0];
let terceiraCor = cores[3];
//modificar um elemento no array 
cores[0] = 'Cinza';

console.log(`${primeiraCor} e ${terceiraCor}`);

//métodos de arrays comuns
//push - adiciona um elemento no final do array
//pop - remove o último elemento do array
//shift - remove o primeiro elemento do array
//unshift - adiciona um elemento no início do array
//length - retorna o tamanho do array

cores.pop();
console.log(cores);

cores.push('Roxo');

cores.shift();
cores.unshift('Rosa');
console.log(cores);

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

//exemplo em loop foreach
cores.forEach(function(cores) {
    console.log(cores)
})