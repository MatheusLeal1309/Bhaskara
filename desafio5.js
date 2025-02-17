const prompt = require('prompt-sync')();

let cadastroUsuario = [];

do
{
    console.log("Bem-vindo ao cadastramento de usuários, selecione a opção desejada: ");
    console.log("1 - Adicinar um Usuário: ");
    console.log("2 - Remover um usuário: ");
    console.log("3 - Exibir usuários cadastrados: ");
    console.log("4 - Sair.");

    var opcao = parseInt(prompt("Escolha uma opção:"));

    switch(opcao)
    {
        case 1:
            adicionarUsuario();
            break;
        case 2:
            removerUsuario();
            break;
        case 3:
            exibirListaDeUsuarios();
            break;
        case 4:
            console.log("Obrigado por utilizar nossos serviços, tenha um ótimo dia!")
            break;
        default:
            console.log("Digite uma opção válida.");
            break;  
    }
} while(opcao != 4)


function adicionarUsuario()
{
    nomeUsuario = prompt("Digite seu nome: ");
    idadeUsuario = prompt("Digite sua idade: ");
    emailUsuario = prompt("Digite seu email: ");

    if(cadastroUsuario.some(x => x.email === emailUsuario)){
        console.log("Email já cadastrado, tente novamente.");
    }else
    {
        cadastroUsuario.push({
            nome: nomeUsuario,
            idade: idadeUsuario,
            email: emailUsuario
        });
        console.log("Usuário cadastrado com sucesso.");
    }

}

function removerUsuario()
{   
    let removerUsuario = prompt("Digite o email do usuário que deseja remover: ");
    let remove = cadastroUsuario.findIndex(x => x.email === removerUsuario);

    if(remove === -1)
    {
        console.log("Usuário não encontrado.");
    }else
    {
        cadastroUsuario.splice(remove, 1);
        console.log("Usuario removido com sucesso.");
    }
}

function exibirListaDeUsuarios()
{
    cadastroUsuario.length === 0 ? console.log("Nenhum usuário encontrado.") : console.log(cadastroUsuario);
}
