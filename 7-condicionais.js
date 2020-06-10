console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;

if (idadeComprador < 18 || !estaAcompanhada) {
    listaDeDestinos.splice(2, 1);
} else {
    listaDeDestinos.push(`Gramado`);
}

console.log(`Destinos possíveis: `);
for (i = 0; i < listaDeDestinos.length; i++) {
    console.log(listaDeDestinos[i]);
}


console.log("Embarque: \n\n");

if (temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar!")
}
