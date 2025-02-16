const prompt = require('prompt-sync')();

let listaDeCompras = [];

do
{
    console.log("Bem-vindo as compras, selecione a opção desejada: ");
    console.log("1 - Adicinar Itens: ");
    console.log("2 - Remover um item: ");
    console.log("3 - Exibir itens: ");
    console.log("4 - Sair.");

    var opcao = parseInt(prompt("Escolha uma opção:"));

    switch(opcao)
    {
        case 1:
            adicionarItem();
            break;
        case 2:
            removerItem();
            break;
        case 3:
            exibirLista();
            break;
        case 4:
            console.log("Obrigado por utilizar nossos serviços, tenha um ótimo dia!")
            break;
        default:
            console.log("Digite uma opção válida.");
            break;  
    }
} while(opcao != 4)


function adicionarItem()
{
    do{
        item = prompt("Adicione quantos itens quiser a lista de compras e para sair digite 0: ");
        listaDeCompras.push(item);
        console.log("Item adicionado com sucesso.");
    } while(item != 0)
    
}

function removerItem()
{   
    item = prompt("Digite o item q deseja remover: ");
    let remove = listaDeCompras.indexOf(item);
    listaDeCompras.splice(remove, 1);
    console.log("Item removido com sucesso.");
}

function exibirLista()
{
    listaDeCompras.length === 0 ? console.log("Carrinho vazio.") : console.log(listaDeCompras);
}
