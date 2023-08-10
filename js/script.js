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
        // window.location.href = "https://www.youtube.com/@PeppaPigPortuguesOficial/featured"
    }
})

let endereco = document.querySelector("input[name=end]") /* pesquisa um seletor (input) que tenha o valor "name" com end*/
endereco.addEventListener("blur", function () {
    // console.log(endereco.value.length)
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

email.addEventListener("keyup", function(){
    let minusculo = email.value.toLowerCase() //torna o conteúdo minuscula
    conf.value = email.value
    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.com') == -1){
       console.log("email inválido")
       //email.style.border = "2px solid red"
       email.classList.add("border-danger")
       email.classList.remove("border-success")
    }
    else{
       console.log("email válido");
       //email.style.border = "2px solid green"
       email.classList.add("border-success")
       email.classList.remove("border-danger")
    }
    console.log(email.value.indexOf("@")) /*IndexOf retorna a posição do caracter de texto */

})

let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")

// isto é uma arrow function, forma resumida da função anônima
btn_olho.addEventListener("click", () => {
    if(btn_olho.classList.contains("fa-eye")){
        console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        //colocar um atributo novo
        senha.setAttribute("type", "text")
    }
    else{   
        console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type", "password")
    }
})

//PEGANDO DADOS DE CAMPOS CHECK E RADIOS

let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click", (evento)=>{
    // console.log(evento)
    evento.preventDefault()// a função irá impedir o comportamento padrão do botão

    // console.log(escolaridade)// se colocar a posição [] irá selecionar a opção equivalente

    for(var itens of escolaridade){
        // console.log(itens)
        if(itens.checked){
            alert(`Sua escolaridade é ${itens.value}`)// isto é um template string é uma outra forma de concatenar texto com variável
            // alert("sua escolaridade é "+itens.value)
            confirm("Tem certeza?")
            
        }
    }
    
})

// CAMPO SWITCH

let escolha = document.querySelector("#escolha")
let contrato = document.querySelector("#contrato")

contrato.classList.add("d-none")

escolha.addEventListener("change", ()=> {
    if(escolha.checked) {
        contrato.classList.remove("d-none")
        contrato.classList.remove("d-block")
    }
    else{
        contrato.classList.remove("d-block")
        contrato.classList.add("d-none")
    }
})

let concordo = document.querySelector("#concordo")

concordo.addEventListener("change", ()=>{
    if(concordo.checked){
        alert("Sua escolaridade foi selecionada!")

    }
    else{
        alert("A opção foi desmarcada!")
        let mensagem = prompt("Diga porque você desmarcou")//criar uma caixa de texto
    }
})

// Caixa de seleção

let trabalho = document.querySelector(".form-select")

trabalho.addEventListener("change", () => {
   // console.log(trabalho.options)

   for(let itens of trabalho){
    if(itens.selected){
        //console.log(itens.value)
        if(itens.value == "RH"){
            trabalho.style.backgroundColor = "cyan"
        }
        if(itens.value == "Tecnologia"){
            trabalho.style.backgroundColor = "blue"
            trabalho.style.color = "white"
        }
        if(itens.value == "Financeiro"){
            trabalho.style.backgroundColor = "purple"
            trabalho.style.color = "white"
        }
    }
   }
})