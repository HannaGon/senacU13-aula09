//iniciar bancos de dados:
function bancoDeDados(){
    return require("./data/ghibli.json")
}
let todos = bancoDeDados()

//Exercicio 1
function listarTodos(){
    for (let atual of todos){
        console.log("---------------------")
        console.log(atual.title)
        console.log(atual.description)
    }
}

//Exercicio 2
/*acesse o json e retorne título e descrição de todos os filmes*/

function searchId(id){
 for (let variavel of todos){
    if (variavel.id==id) {
        console.log(variavel.title)
        console.log(variavel.description)
    }
    else{}
 }
}
listarTodos()
searchId(1)