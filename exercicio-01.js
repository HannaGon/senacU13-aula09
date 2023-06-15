/*acesse o json e retorne título e descrição de todos os filmes*/
function bancoDeDados() {
    return require("./data/ghibli.json")
}

let dbghibli = bancoDeDados()

function listar(){
    for(let filmeDescricao of dbghibli){
    console.log(filmeDescricao.title + "\n" + filmeDescricao.description + "\n\n")
    }
}
listar()