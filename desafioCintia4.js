const prompt = require('prompt-sync')();

let equipe = [];
//let pontuacao = [];


function teste() 
{
    do {
        let pontoTarefa = Math.round(Math.random() * 10);
        let numeroTarefa = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

        nome = prompt("Digite seu nome: ");
        //equipe.push(nome);

        if (numeroTarefa % 2 !== 0) 
        {
            pontoTarefa *= 2;
        }

        let media = numeroTarefa * pontoTarefa;

        let pontuacaoFinal = media / numeroTarefa;

        if (pontuacaoFinal > 8) 
        {
            pontuacaoFinal += 2;
        }

        //pontuacao.push(pontuacaoFinal);
        equipe.push({ nome, pontuacaoFinal });

        console.log("Nome: " + nome);
        console.log("Tarefas: " + numeroTarefa);
        console.log("Pontos: " + pontuacaoFinal);

        var qtdEquipe = equipe.length;

        var melhor = equipe.reduce((max, x) => x.pontuacaoFinal > max.pontuacaoFinal ? x : max, equipe[0]);
        var pior = equipe.reduce((min, x) => x.pontuacaoFinal < min.pontuacaoFinal ? x : min, equipe[0]);
        
       // var max = pontuacao.reduce((a,b)=>Math.max(a,b));
        //var min = pontuacao.reduce((a,b)=>Math.min(a,b));
    }
    while (qtdEquipe < 4)

    console.log(`O melhor desempenho foi de ${melhor.nome} com ${melhor.pontuacaoFinal} pontos.`);
    console.log(`O pior desempenho foi de ${pior.nome} com ${pior.pontuacaoFinal} pontos.`);
        

}

teste();