const prompt = require('prompt-sync')();

    //let equipe = [];
    let nome1 = prompt("Digite seu nome: ");
    let nome2 = prompt("Digite seu nome: ");
    let nome3 = prompt("Digite seu nome: ");

    let pontoTarefa = Math.round(Math.random() * 10);
    let numeroTarefa = Math.floor(Math.random() * (10 - 5 + 1)) + 10;
    let pontuacaoFinal = 0;
    
    nome1 = numeroTarefa;
    nome2 = numeroTarefa;
    nome3 = numeroTarefa;

    media = numeroTarefa *= pontoTarefa;

    if(pontoTarefa % 2 !== 0)
    {
        pontoTarefa *= 2;
    }
    
    pontuacaoFinal = media / numeroTarefa;

    if(pontuacaoFinal > 8)
    {
        pontuacaoFinal += 2;
    }
    console.log(nome1 + pontuacaoFinal);
    console.log(nome2 + pontuacaoFinal);
    console.log(nome3 + pontuacaoFinal);













//cada pessoa do time 
//nome
//media
//melhor desempenho
//pior desempenho