/*crie uma função que retorne titulo e
descrição de um valor no banco com base
em seu id*/

function titulo(){
    return require("./data/ghibli.json")
}




function idTitulo(id){
    for (let variavel of titulo()){
       if (variavel.id==id) {
           console.log(variavel.title)
           console.log(variavel.description)
       }
       else{}
    }
   }
   idTitulo(3)