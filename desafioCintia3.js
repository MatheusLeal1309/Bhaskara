
let jogador = 20 ;

for(let rodada = 1; rodada <=20; rodada++)
{
    let dado = Math.floor(Math.random() * 6) + 1;
    if(dado % 2 !== 0)
    {
        jogador += 10;
    }
    else if(dado % 2 === 0)
    {
        jogador -= 5;
    }

    if(rodada % 3 === 0)
    {
        jogador += 15;
    }
    else if(rodada % 4 === 0)
    {
        jogador -= 40;
    }

    if(jogador < 0)
    {
        jogador = -jogador * 2;
    }

    console.log("Rodada: " + rodada + " Dado: " + dado + " Pontuação: " + jogador);
}
if(jogador >= 50)
{
    console.log("Parabéns, você ganhou!" + "\n" + "Pontuação final: " + jogador);
}
else
{
    console.log("Você perdeu. ;-; " + "\n" + "Sua pontuação foi de: " + jogador + " pontos")
}