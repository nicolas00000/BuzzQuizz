
buscardados()
function buscardados(){
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/77")
    promessa.then(renderizarPergunta)
}

function renderizarPergunta(resposta){
    const dados = resposta.data.questions;  // pega o numero de questoes que tem na array e transforma com o numero limte de UL a serem renderizadas
      console.log(resposta.data);
    const caixa = document.querySelector(".caixadeUL")
    caixa.innerHTML = ""

    const titulo = document.querySelector(".titulodoquizz")
    titulo.innerHTML = `${resposta.data.title}`

    for(let i=0;i<dados.length;i++){
        caixa.innerHTML += `
        
        <ul class="lista-de-perguntas">
            <div class="topo" style="background-color: ${dados[i].color};">${dados[i].title}</div> 
            <div class="pergunta">kjdsj</div> 
            <div class="pergunta">kjdsj</div>
            <div class="pergunta">kjdsj</div>
            <div class="pergunta">kjdsj</div>
        </ul>
        <br>
        `
    }
    
}


function abrirQuizz(){
    const aparecer = document.querySelector(".quizz-respostas")
    aparecer.classList.toggle("escondido")
    

}