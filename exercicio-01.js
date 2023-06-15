/*acesse o json e retorne título e descrição de todos os filmes*/

function bancoDeDados() {
    return require("./data/ghibli.json")
}

let dbghibli = bancoDeDados()

for (let filme of dbghibli) {
    console.log('Título: ' + filme.title)
    console.log('Descrição: ' + filme.description)
    console.log('\n')
}
