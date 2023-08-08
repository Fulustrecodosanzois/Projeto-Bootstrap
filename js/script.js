//alert("E ai doido!")

console.log("Só quem é dev vai descobrir!")

let nome = document.querySelector("#nome")


function exibirNome() {
    console.log(nome.value)
    if (nome.value == "") {
        nome.style.border = "2px solid red"
    }
    else {
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur", exibirNome)// o addEventListener cria um evento para algum elemento, nesta caso o evento "blur"(desfoque), quando tira o foco do campo

// nome.addEventListener("focus", function(){
//     nome.value = "Este campo não deve ficar vazio"
// })

let idade = document.querySelector("#idade")

idade.addEventListener("blur", function () {
    if (idade.value >= 18) {
        alert("Você possui 18 anos ou mais")
    }
    else {
        alert("Infelizmente você é menor de idade!")
        window.location.href = "https://www.youtube.com/@PeppaPigPortuguesOficial/featured"
    }
})

let endereco = document.querySelector("input[name=end]") /* pesquisa um seletor (input) que tenha o valor "name" com end*/
endereco.addEventListener("blur", function () {
    console.log(endereco.value.length)
    if (endereco.value.length >= 35) {
        alert("A quantidade de letras excede 35 letras")
        endereco.style.border = "2px solid red"
    }
    else {
        alert("O endereço esta menor")
        endereco.style.border = "2px solid yellow"
    }
})

let email = document.querySelector("#email")
let conf = document.querySelector("#confirmar")

let minusculo = email.value.toLowerCase() //torna o conteúdo minuscula

email.addEventListener("keyup", function(){
    conf.value = email.value
    if(minusculo.indexOf("@") == -1 || minusculo.indexOf(".com") == -1){

    }
    else{

    }
    console.log(email.value.indexOf("@")) /*IndexOf retorna a posição do caracter de texto */

})

