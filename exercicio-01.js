/*acesse o json e retorne título e descrição de todos os filmes*/

function filmes(){
    return require("./data/ghibli.json")
}

console.log(filmes())