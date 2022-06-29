let nu = 0;

function abrirQuizz(idretorno){
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
    const dados = resposta.data.questions;  // pega o numero de questoes que tem na array e transforma com o numero limte de UL a serem renderizadas
    
    const caixa = document.querySelector(".caixadeUL")
    caixa.innerHTML = ""

    const titulo = document.querySelector(".titulodoquizz")
    titulo.innerHTML = `${resposta.data.title}`

    const imgFundo = document.querySelector(".imagem-body")
    imgFundo.src = `${resposta.data.image}`
 




//---------- RENDERIZAR BLOCO DE PERGUNTA ---------------
let quizz = resposta.data
let PERGUNTAS = ""


quizz.questions.forEach(function (pergunta, indice) {
    PERGUNTAS += gerarperguntaAleatoria(pergunta, indice)
});

    // for(let i=0;i<dados.length;i++){

    //     //cada bloco de pergunta
    //     // caixa.innerHTML += `
    //     // <ul class="lista-de-perguntas lista-de-perguntas${i}" id="lista-de-perguntas">
    //     //     <div class="topo " style="background-color: ${dados[i].color};">${dados[i].title}</div> 
    //     //     ${PERGUNTAS}
    //     //     </ul>
    //     // <br>`

       
    // }   

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
            <div class="topo " style="background-color: ${pergunta.color};">${pergunta.title}</div> 
            ${respostas}
            </ul>
        <br>`

    }
     
    function gerarCadaResposta(resposta, indice){
        let classe = "incorreta"
        if(resposta.answers) {
            classe = "correta"
        }
        return  `
            <div class="pergunta ${classe}" onclick="verificarTrue(this, ${resposta.isCorrectAnswer}, ${indice})">
                <h3 class="tituloPg" > ${resposta.text} </h3>
                <img src="${resposta.image}">
            </div>`
    }

    // console.log(caixa)
    // console.log(dados)




let soma = 0;
let numero = 0;
respostas()
function respostas(){
    

   

    // for(let i=0; i <dados[i].answers.length;i++){   
        
    //     const lista = document.querySelector(`.lista-de-perguntas${numero}`)
 
    //         lista.innerHTML += `
    //             <div class="pergunta" id="pergunta0" onclick="verificarTrue(this, <!--${dados[numero].answers[i].isCorrectAnswer}--!>)">
    //                 <h3 class="tituloPg tituloPg${dados[numero].answers[i].isCorrectAnswer}${numero}" id="" > ${dados[numero].answers[i].text} </h3>
    //                 <img src="${dados[numero].answers[i].image}">
    //             </div>`
                

    //         soma++
    //         if(soma  < dados[i].answers.length){
    //             console.log("ok")
    //         }
    //         else{           //passar para o bloco de perguntas a baixo
    //             soma=0
    //             numero+++
    //             respostas()
    //         }
    //     }
       
    }

}

   let i = 0    //vou usar esse numero para mudar de pergunta

function verificarTrue(clicado, verdadeiro){


    //  const certa = document.querySelector(".tituloPgtrue0")  
    //  const errado =document.querySelector(".tituloPgfalse0" )
    //  i++  
    // if(clicado.classList.contains("true") ||clicado.classList.contains("false") ){
    //     certa.classList.add("correto")
    //     errado.classList.add("errado")
// 1:00:00
    // }

  }