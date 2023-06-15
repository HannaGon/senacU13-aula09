/*crie uma função que retorne titulo e
descrição de um valor no banco com base
em seu id*/
function bancoDeDados() {
    return require("./data/ghibli.json")
}

var dbghibli = bancoDeDados()

function filmeId(id){
    id = id-1
    console.log(`>>>${dbghibli[id].title}<<<\n${dbghibli[id].description}`)
}
filmeId(1)