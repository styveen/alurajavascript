console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`);

console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);


console.log(`Destinos possíveis: `);

listaDeDestinos.splice(2, 1);

for (i = 0; i < listaDeDestinos.length; i++) {
    console.log(listaDeDestinos[i]);
}
