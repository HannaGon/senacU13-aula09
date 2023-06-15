/*crie uma função que retorne titulo e
descrição de um valor no banco com base
em seu id*/

function bancoDeDados() {
    return require("./data/ghibli.json")
}

let dbghibli = bancoDeDados()

function getById(id) {
    for (let filme of dbghibli) {
        if (filme.id == id) {
            return {
                titulo: filme.title,
                descricao: filme.description
            }
        }
    }
    return null
}

let filme = getById(1)

if (filme == null) {
    console.log('Filme não encontrado.')
} else {
    console.log('Título: ' + filme.titulo)
    console.log('Descrição: ' + filme.descricao)
}
