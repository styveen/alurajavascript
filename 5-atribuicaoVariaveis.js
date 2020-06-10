console.log("Atribuição de variáveis");

const nome = "David";
let lNome = "David"
const sobrenome = "Styveen";

console.log(nome, sobrenome);
console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`);

/* constante não pode ser atribuído novamente, para variáveis deverá ser atribuída como let
nome = nome + sobrenome;
*/

lNome = lNome + sobrenome;
console.log(lNome);
