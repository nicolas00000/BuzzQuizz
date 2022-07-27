let nu = 0;
let totaldeperguntas = 0
let respostasCertas = 0
let contadorRespondidas = 0
let nivelLevel = 0 
let level ;



function abrirQuizz(idretorno){
    window.scrollTo(0, 0)
    nu = idretorno
    buscardados()
    const resposta = document.querySelector(".quizz-respostas")
    resposta.classList.toggle("escondido")
    
    const opcoes = document.querySelector(".container")
    opcoes.classList.toggle("escondido")

}

function buscardados(){
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/" + nu)
    promessa.then(renderizarPergunta)   
}

function renderizarPergunta(resposta){
    dados = resposta.data.questions;  // pega o numero de questoes que tem na array e transforma com o numero limte de UL a serem renderizadas
    totaldeperguntas = resposta.data.questions;
    const caixa = document.querySelector(".caixadeUL")
    caixa.innerHTML = ""

    const titulo = document.querySelector(".titulodoquizz")
    titulo.innerHTML = `${resposta.data.title}`

    const imgFundo = document.querySelector(".imagem-body")
    imgFundo.src = `${resposta.data.image}`
    
    level = resposta.data.levels
    // alert(level.length)

    

    //---------- RENDERIZAR BLOCO DE PERGUNTA ---------------
    let quizz = resposta.data
    let PERGUNTAS = ""


    quizz.questions.forEach(function (pergunta, indice) {
        PERGUNTAS += gerarperguntaAleatoria(pergunta, indice)
    });

    //aleatoriezando as respostas junto com o indice e retornando na pergunta aleatoria 
    //que é sobreescrevida pelo PERGUNTAS que comecou vazio..
        function gerarperguntaAleatoria(pergunta, indice){
            function aleatorizaAi(){
                return Math.random() - 0.5
            }
            pergunta.answers.sort(aleatorizaAi)
            
            
            let respostas = ""
            pergunta.answers.forEach (function (resposta) {
                respostas += gerarCadaResposta(resposta, indice)
            });


                caixa.innerHTML += `
            <ul class="lista-de-perguntas pergunta${indice}" id="perguntas">
                <div class="topo " style="background-color: ${pergunta.color};">
                <span class="texto-topo">${pergunta.title}</div> 
                ${respostas}
                </ul>
            <br>`

        }
        
        function gerarCadaResposta(resposta, indice){
            let classe = "incorreta"
            if(resposta.answers)  classe = "correta"
            
            return  `
                <div class="resposta resposta${indice} ${resposta.isCorrectAnswer}"  onclick="verificarTrue(this, ${resposta.isCorrectAnswer}, ${indice})">
                    <h3 class="tituloPg rp${indice} " id="foo"> ${resposta.text} </h3>
                    <img src="${resposta.image}">
                </div>
                `
        }

}
let o = 0;
let y = 0
let x= 0
let cinco = 5
function verificarTrue(elementoClicado, verdadeiro, id){
    //------------NAO DEIXAR RESPONDER 2 VEZES A MSM PERGUNTA------
    if(elementoClicado.parentNode.classList.contains("respondido")){
        return
    }
    
    contadorRespondidas++

    if(contadorRespondidas === totaldeperguntas.length){
    setTimeout(mostrarResultado, 3000)
    }
//-----------------ADICIONAR A CLASSE NA PERGUNTA RESPONDIDA---------
    let metade = totaldeperguntas.length*10/2
    
    if(verdadeiro === true){    
        elementoClicado.parentNode.classList.add("respondido")
        respostasCertas += 10
        // alert(respostasCertas)

     }

     if(metade%2 === 1){
        metade+= 5
        }

     if(respostasCertas === metade && nivelLevel === 0 ){
        nivelLevel++
    }

     else{
        elementoClicado.parentNode.classList.add("respondido")    
    }   
    

     let setentaCento =  totaldeperguntas.length*10-10
   
     if(respostasCertas === setentaCento && nivelLevel === 1 ){
        if(nivelLevel===1 && level.length === 2){
            nivelLevel--
        }
        nivelLevel++
        y++
     }
     
    
        
        
    
//------------------ADICIONANDO TRANSPARENCIA NAS RESPOSTAS-------
    
    let respostas = elementoClicado.parentNode.querySelectorAll(".resposta")
    const elemento = Array.from(respostas)

    
    for(let i =0 ; i < elemento.length; i++){
        const resposta  = elemento[i]
        if(elementoClicado !== resposta){
            resposta.classList.add("trasparente")
        }
    }


//----------------ADICIONANDO VERDADEIRO OU FALSO NA PERGUNTA CLICADA----

    const lista = elementoClicado.parentNode; // isso é o pai do elemento clicado
    const listaFilhos = lista.children; // retornando uma aray com todos filhos dentro

    for(let i = 0 ; i < listaFilhos.length; i++){    //para cada volta dada na array
    
        if(listaFilhos[i].classList.contains('true')){   //verifica por cada indice se alguma contem a resposta verdadeira
            const correto = listaFilhos[i].querySelector("h3");  //se tiver verdadeiro na classe do filho ele pega de dentro do filho o H3
            correto.classList.add("true")                           //e adiciona a classe true no h3, assim ficando verde
        }
        
        if(listaFilhos[i].classList.contains("false")){
            const errado = listaFilhos[i].querySelector("h3");
            errado.classList.add("false");
        }
    }
}

  
function mostrarResultado(){
    const result = document.querySelector(".caixadeUL")
    

    if(contadorRespondidas === totaldeperguntas.length){
        result.innerHTML += `
             <div class="resultado "> 
                  <div class="topo"> ${level[nivelLevel].title} ${nivelLevel}
                  </div>
                    <div class="img-result">
                        <img src="${level[nivelLevel].image}" >
                        <div class="texto">
                            ${level[nivelLevel].text}
                        </div>
                    </div>
                     
            </div>`
    }

    
     
     
}
    