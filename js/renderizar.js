buscarDadosAPI()
function buscarDadosAPI(){
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes")
    promessa.then(renderizarImprimir)
    // promessa.cath(erro)
}

function renderizarImprimir(resposta){
    console.log(resposta.data)
    const qtd = resposta.data

    const tabela = document.querySelector(".lista")
    tabela.innerHTML=""
    for (let i = 0; i < qtd.length ; i++){ 
        console.log("rodou")
        tabela.innerHTML += `
        
        <li class="cardVazio"> <h2 class="${qtd[i].title}">titulo </h2><img src="${qtd[i].image}" alt=""> </li>
        
        `

    }
}