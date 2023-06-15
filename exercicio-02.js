/*crie uma função que retorne titulo e
descrição de um valor no banco com base
em seu id*/

function bancoDeDados(){
    return require("./data/ghibli.json")
}

let id = 7
function filme(id){
    for(let variavel of bancoDeDados()){
    if(variavel.id==id){
    console.log(`${bancoDeDados()[id].title}\n\n${bancoDeDados()[id].description}`)
    }
    }
}

filme(id)