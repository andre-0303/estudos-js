//loops - for, while, do while, for in, for of
// o que é um loop? - é uma estrutura de repetição que executa um bloco de código várias vezes

//loop - for
// for (inicialização; condição; incremento) {
//     //bloco de código
// }

for (let i = 1; i < 6; i++ ){
    console.log(i);
}

//while - condição especifica é verdadeira

let contador = 0;
while (contador < 6) {
    console.log("Contagem: " + contador);
    contador++;
}

let numero = 0;
do {
    console.log("Número:" + contador);
    numero++;
} while (numero < 5);

let filmes = ['Senhor dos aneis - A sociedade do anel', 'Hobbit', 'IT - A Coisa', 'Verônica'];

for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i])
}