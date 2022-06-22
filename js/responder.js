

buscardados()

function buscardados(){
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/14")
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

 

    for(let i=0;i<dados.length;i++){
        caixa.innerHTML += `
        <ul class="lista-de-perguntas lista-de-perguntas${i}">
            <div class="topo" style="background-color: ${dados[i].color};">${dados[i].title}</div> 
          
        </ul>
        <br>`

       
    }   

    
    console.log(caixa)
    console.log(dados)




let soma = 0
let numero = 0
respostas()
function respostas(){
    for(let i=0; i <dados[i].answers.length;i++){   

        const lista = document.querySelector(`.lista-de-perguntas${numero}`)
        lista.innerHTML += `<div class="pergunta"> <h3 class="tituloPg"> ${dados[numero].answers[i].text} </h3> <img src="${dados[numero].answers[i].image}">  </div>`
            soma++
            console.log(dados)
            if(soma  < dados[i].answers.length){
                console.log("ok")
            }
            else{
                soma=0
                numero+++
                respostas()
            }
        }

    }

}
