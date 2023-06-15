/* a função bancoDeDados() busca os valores do json*/
function bancoDeDados() {
    return require("./data/ghibli.json")}

/* criamos uma variável para guardar os valores do BD*/

let dbghibli = bancoDeDados()

//exibir o json inteiro:
console.log(dbghibli[2].title)

//exibir apenas o titulo do primeiro filme:
//console.log(dbghibli[0].title)

//exibir apenas os titulos no json:
//for (let filme of dbghibli) {
//    console.log(filme.title)
//}