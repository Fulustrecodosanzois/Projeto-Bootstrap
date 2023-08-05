//alert("E ai doido!")

console.log("Só quem é dev vai descobrir!")

let nome = document.querySelector("#nome")


function exibirNome() {
    console.log(nome.value)
    if(nome.value= ""){
        nome.style.border =  "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur", exibirNome)// o addEventListener cria um evento para algum elemento, nesta caso o evento "blur"(desfoque), quando tira o foco do campo

// nome.addEventListener("focus", function(){
//     nome.value = "Este campo não deve ficar vazio"
// })