let precoProduto = 7.50;
let ICMS = Math.floor(Math.random() * (25 - 12 + 1)) + 12;
let desconto =  precoProduto * 0.10;
let TemDireitoDesconto = Math.random() < 0.25;
let cupom = precoProduto * 0.15;

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

console.log(precoProduto);




