// <---------------------RENDERIZANDO JOGOS-------------------------->
buscarDadosAPI()
function buscarDadosAPI(){
    window.scrollTo(0, 0)
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes")
    promessa.then(renderizarJogos)
    promessa.cath(falha)
}
function falha(){
    alert("ops! atualiza a pagina ai...")
}
function renderizarJogos(resposta){
     window.scrollTo(0, 0)
    const qtd = resposta.data
    // quizzUser []
    const tabela = document.querySelector(".lista")
    tabela.innerHTML=""
    for (let i = 0; i < qtd.length ; i++){ 
        tabela.innerHTML += `
        <li class="cardVazio" onclick="abrirQuizz(${qtd[i].id})">
            <h2 class="titulo">${qtd[i].title} </h2>
            <img class="imgOpcoes" src="${qtd[i].image}" alt=""> 
            <div class="sombra"> </div>
        </li>
        `
    }
    
    MostrarQuizesQueOusuarioJaTem()
}

function MostrarQuizesQueOusuarioJaTem(){
    const a = localStorage.getItem("quizzes")
    const lista = JSON.parse(a)  //transforma em array novamente
    
    const quizzesUser = document.querySelector(".meusquizes")


    if(lista != null){
         quizzesUser.innerHTML = ` <a class="adc" href="enviargame.html"> + </a> `
        for(let i=0 ; i<lista.length; i++){
            quizzesUser.innerHTML += `
                <li class="cardVazio" onclick="abriQuizz(${lista[i].id})">
                    <h2 class="titulo"> ${lista[i].title} </h2>
                    <img class="imgOpcoes" src="${lista[i].image}" alt=""> 
                    <div class="sombra"> </div>
                </li>
            `
        }
    }
      //3dm 11dm    7 am    7 dm 
    
}
// <---------------------ABRIR JOGO----------950   f7a24f31-0ece-45db-af26-05ad122adb0f---------------->



