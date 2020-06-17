console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 16;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;

while (contador < listaDeDestinos.length) {

    if (listaDeDestinos[contador] == destino) {

        if (podeComprar) {
            temPassagemComprada = true;
        }

        break; // força a saída do loop
    }

    contador++;
}
/*
for (let cont = 0; cont < listaDeDestinos.length; cont++) {

    if (listaDeDestinos[cont] == destino) {

        if (podeComprar) {
            temPassagemComprada = true;
        }

        break; // força a saída do loop
    }

}
*/

if (temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar!")
}
