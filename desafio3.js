const prompt = require('prompt-sync')();
let tentativas = 1;
let numero = 0;

numero = prompt("Digite um número entre 0 e 100: ");
var resultado = Math.round(Math.random() * 100);

while(numero != resultado)
{
    if(numero < resultado)
    {
        console.log("o número é maior, tente novamente.");
    }
    else
    {
        console.log("O número é menor, tente novamente: ");
    }

    numero = prompt("Digite outro número: ");
    tentativas++;

}

console.log("Parabéns, você acertou em: " + tentativas + " tentativas.");