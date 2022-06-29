// <---------------------RENDERIZANDO JOGOS-------------------------->
buscarDadosAPI()
function buscarDadosAPI(){
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes")
    promessa.then(renderizarJogos)
    promessa.cath(erro)
}
function erro(){
    alert("ops! atualiza a pagina ai...")
}
function renderizarJogos(resposta){
    const qtd = resposta.data
    const tabela = document.querySelector(".lista")
    tabela.innerHTML=""
    for (let i = 0; i < qtd.length ; i++){ 
        console.log("rodou")
        tabela.innerHTML += `
        <li class="cardVazio" onclick="abrirQuizz(${qtd[i].id})">
            <h2 class="titulo">${qtd[i].title} </h2>
            <img class="imgOpcoes" src="${qtd[i].image}" alt=""> 
            <div class="sombra"> </div>
        </li>
        `
    }
}

// <---------------------ABRIR JOGO-------------------------->

// responder.js

