/*acesse o json e retorne título e descrição de todos os filmes*/

function bancoDeDados() {
    return require("./data/ghibli.json")}

let dbghibli = bancoDeDados()

function listar(){
for (let todos of dbghibli){
    console.log()
    console.log(todos.title)
    console.log()
    console.log(todos.description)
    }
}
listar()

