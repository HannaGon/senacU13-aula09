/*crie uma função que retorne titulo e
descrição de um valor no banco com base
em seu id*/

function bancoDeDados() {
    return require("./data/ghibli.json")}

let dbghibli = bancoDeDados()

function searchId(id){
    for (let variavel of dbghibli){
       if (variavel.id==id) {
           console.log(variavel.title)
           console.log(variavel.description)
       }
       else{}
    }
   }
   searchId(1)