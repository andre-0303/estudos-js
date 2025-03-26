function pessoa() {
  let nome = "André Bandeira";
  let idade = 17;
  const cidade = "Croatá da Serra";
  console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}

let andre = ["André Bandeira", 17, "Croatá da Serra"];
console.log(`Nome: ${andre[0]}, Idade: ${andre[1]}, Cidade: ${andre[2]}`);

for (let i = 0; i < andre.length; i++) {
  console.log(andre[i]);
}
