let a = 4;
let b = -28;
let c = 49;

if(a != 0)
{
    let delta = b**2 - 4*a*c;

    if(delta < 0)
    {
        console.log("Não existe raiz real, pois valor de Delta é menor que 0.");
    }
    else if(delta > 0)
    {
        let raizQuadrada = Math.sqrt(delta);
        let raizUm = (-(b) + raizQuadrada) / (2 * a);
        let raizDois = (-(b) - raizQuadrada) / (2 * a);

        console.log("Raiz real um é igual a: " + raizUm);
        console.log("Raiz real dois é igual a: " + raizDois);
    }
    else
    {
        raizUnica = -b / (2 * a);
        console.log("Apenas uma raiz real foi encontrada pois delta possuiu valor de zero e seu valor é: " + raizUnica);
    }
}
else
{
    console.log("Variavel 'a' não pode ser igual a zero.");
}