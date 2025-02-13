let precoProduto = 7.50;
let ICMS = Math.floor(Math.random() * (25 - 12 + 1)) + 12;
let desconto =  precoProduto * 0.10;
let TemDireitoDesconto = Math.random() < 0.25;
let cupom = precoProduto * 0.15;
let comprador = "PROMO15";
let frete = "RJ";

if(comprador == "PROMO15")
{
    produtoComCupom = precoProduto - cupom;
    console.log(produtoComCupom);
}

if(TemDireitoDesconto == true)
{
    produtoComDesconto = (precoProduto - desconto);
    console.log(produtoComDesconto);
}
else
{
   produtoComImposto = precoProduto + ICMS;
   console.log(produtoComImposto);
}

switch(frete)
{
    case (frete = "SP"):
    console.log("O frete custa R$10,00");
    break;
    case (frete = "RJ"):
        console.log("O frete custa R$20,00");
    break;
    default:
        console.log("O frete custa R$30,00")
}

console.log(precoProduto);




