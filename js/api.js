let tabela = document.querySelector("#tabela")

// --------------------------------------------- JAVA SCRIPT ASSÍNCRONO
// --------------------------------------------- CONSUMO


// async = forma em que o js transforma uma função síncrona em assincróna, utilizado em API
async function carregarDados(){
    const url= "https://jsonplaceholder.org/users"

    // o await é usado apenas em assincrono
    const resultado = await fetch(url)
    //fetch = pedi uma busca na url em parâmetro para puxar informações, e aguarda a informação 
    const dados = await resultado.json()// convertendo os dados da api(resultado) em .json a await é novamente usada para entregar as informações apenas quando tudo estiver carregado (código 200)

    // console.log(dados)

    for (const item of dados) {
        // console.log(item.email) aqui é chamado o valor específico


        // -------------------------------------- CRIANDO ELEMENTOS HTML
        const linha = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdTRabalho = document.createElement("td")
        const tdFone = document.createElement("td")

        // --------------------------------------- CRIANDO CONTEÚDO DAS COLUNAS

        tdNome.textContent = item.firstname
        tdEmail.textContent = item.email
        tdFone.textContent = item.phone
        tdTRabalho.textContent = item.company.bs //.company.bs é porque bs se encontra dentro de company

        // -------------------------------------- ADICIONANDO OS ELEMENTOS EM SUAS TEGS

        linha.appendChild(tdNome) // adicione a tag filha de tr
        linha.appendChild(tdEmail)
        linha.appendChild(tdTRabalho)
        linha.appendChild(tdFone)

        tabela.appendChild(linha)


    }


}

carregarDados()