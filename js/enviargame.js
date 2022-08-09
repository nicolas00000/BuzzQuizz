let quizzTESTE = {
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}



let NIVEL= []
let travar = 0;
document.onkeydown = teclado
function teclado(e){
    if(travar != 0){
        return
    }
    if(e.keyCode===13 && travar <= 0){
        verificarTodosPreenchidos()   
        travar++ 
    }

}
let title = ""
let imageCapa = ""
function verificarTodosPreenchidos(){
    const titulo = document.getElementById("titulo").value
    const capa = document.getElementById("URLcapa").value
    const qtdPerguntas = document.getElementById("qtdPerguntas").value
    const qtdNiveis = document.getElementById("qtdNiveis").value

    if(
        titulo != "" && 
        capa != ""   &&
        qtdPerguntas != "" &&
        qtdNiveis != "" && 
        qtdNiveis >= 2 && 
        qtdPerguntas >= 3 && 
        qtdPerguntas <= 6 && 
        qtdNiveis <= 3  &&
        travar <= 0 ){
            title = titulo
            imageCapa = capa
        criarPerguntas()
        return
        
    }else{
        // alert("Preencha todos os campos corretamente")
    }


    function criarPerguntas(){
        const mostrarPergunta = document.querySelector(".container1")
        mostrarPergunta.classList.remove("escondido")
    
        const caixa = document.querySelector(".caixaResponder")
    
        for(let i =0 ; i < qtdPerguntas; i++){

           caixa.innerHTML += `       
           <div class="cada fechado"> 
            <h4>Pergunta ${i+1} 
             <svg onclick="abrir(this)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </h4>

          <div class="paraEsconder escondendo">
            <input class="campoTexto tituloPg"  id="titulo" type="text" required placeholder="Texto da pergunta">
            <input class="campoTexto cor" id="titulo" type="text" required maxlength="7" placeholder="utilize uma cor hexadecimal ex: #000000">
           
            <h4>Respostas correta</h4>
            <input class="campoTexto respostaCorreta-${i}" id="titulo" type="text" required placeholder="Texto da resposta">
            <input class="campoTexto imgCorreta-${i}" id="titulo" type="text" required placeholder="URL da imagem da alternativa">
        
            <br>

            <h4>Resposta incorreta</h4>
            ${respostasIncorretas(i)}
           </div>
           </div>
            `
        }
        caixa.innerHTML += `  <button id="butao" onclick="enviarDadosNomeQuizz()">Prosseguir para criar</button>`;
    }


    function respostasIncorretas(index){
        return `
        <input class="campoTexto respostaIncorreta-${index}" id="titulo" type="text" required placeholder="Texto resposta incorreta">
        <input class="campoTexto imgIncorreta-${index}" id="titulo" type="text" required placeholder="URL da imagem da alternativa">
        
        <input class="campoTexto respostaIncorreta-${index}"  id="titulo" type="text" required placeholder="Texto resposta incorreta">
        <input class="campoTexto  imgIncorreta-${index}" id="titulo" type="text" required placeholder="URL da imagem da alternativa">
        
        <input class="campoTexto respostaIncorreta-${index}" id="titulo" type="text" required placeholder="Texto resposta incorreta">
        <input class="campoTexto  imgIncorreta-${index}" id="titulo" type="text" required placeholder="URL da imagem da alternativa">
        
        `
    }
}

function abrir(elemento){
    const pai = elemento.parentNode.parentNode
    const filho = pai.children[1]
    pai.classList.toggle("fechado")
    filho.classList.toggle("escondendo") 
}

let quizz ={}
function enviarDadosNomeQuizz(){
    const titulo = document.getElementById("titulo").value
    const capa = document.getElementById("URLcapa").value
    const qtdPerguntas = document.getElementById("qtdPerguntas").value
    const qtdNiveis = document.getElementById("qtdNiveis").value

    const tituloPG = document.querySelectorAll(".tituloPg")
    const cor = document.querySelectorAll(".cor")
    

    let perguntas = []
        for(let i = 0 ; i < qtdPerguntas;i++){
            perguntas.push(
                {
                    title: tituloPG[i].value,
                    color: cor[i].value,
                    answers: []
                }
            )
        }


        for(let i = 0 ; i < qtdPerguntas; i++){
        
             quizz= {
                    title: titulo,
                    image: capa,
                    questions: perguntas,
                    levels: NIVEL
                }
            
                // console.log(quizz)
        }

        //adicionando respostas erradas para dentro de answers de perguntas
     
           
        for(let i = 0; i < perguntas.length; i++) {
            let imagensIncorretas = document.querySelectorAll(`.imgIncorreta-`+i)
            let respostasErradas = document.querySelectorAll(".respostaIncorreta-"+i);

            respostasErradas.forEach((element, ind) => {
                perguntas[i].answers.push({
                    text: element.value,
                    image: imagensIncorretas[ind].value ,
                    isCorrectAnswer: false
                })
            }) 
        }
     
       
     //      adicionando resposta correta e imagemTrue para dentro de answers de perguntas
     
        for(let i = 0; i < perguntas.length; i++) {
            let respostasCorretas = document.querySelectorAll(".respostaCorreta-"+i);
            let imagemCorreta = document.querySelector(".imgCorreta-"+i); 
         
            respostasCorretas.forEach((element) => {
                perguntas[i].answers.push({
                    text: element.value,
                    image: imagemCorreta.value, //imagem correta
                    isCorrectAnswer: true
                })
            })
        }
    porsseguirNiveis()
    }

function porsseguirNiveis(){
    const Nv = document.getElementById("qtdNiveis").value
    const caixa = document.querySelector(".container1")
    caixa.innerHTML = `       <h1 class="titulo titulonv"> Agora, decida os níveis </h1>`
    for(let i = 0 ; i < Nv ; i ++ ){
        caixa.innerHTML+= `
        <div class="cada fechado" > 
        <h4 >Nivel ${i+1} 
                <svg onclick="abrir(this)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
         </h4> 
          
        <div class="paraEsconder escondendo">
                <input class="TituloNv-${+i}" placeholder="Titúlo do nível"></input>
                
                <input class="PorcentagemNv-${+i}" placeholder="% do acerto mínima"></input>
                
                <input class="URLnv-${+i}" placeholder="URL da img do nível"></input>    
            
                <input class="TxtNv-${+i}" placeholder="Descrição do nível"></input>
        
                </div>
                
        </div>`   

        
    }

    caixa.innerHTML += `  <button onclick="validarUrlNiveis()"> Finalizar</button> `;

}

function validarUrlNiveis(){
  
    const Nv = document.getElementById("qtdNiveis").value
    for(let i= 0; i < Nv; i++){
        let tituloNV = document.querySelector(".TituloNv-"+i).value;
        let porCem = document.querySelector(".PorcentagemNv-"+i).value;
        let url = document.querySelector(`.URLnv-${+i}`).value;
        let descri = document.querySelector(`.TxtNv-${+i}`).value;
        
        NIVEL.push({
            title: tituloNV,
			image: url,
			text: descri,
			minValue: porCem
        })
        
    }

    console.log(NIVEL)
    
    let enviar =  axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes", quizz)
    enviar.then(salvarLocalStorageID)
} 

function quizzPertenceUser(quizz){
    const quizzesDoUser = obterQuizzPersistino()

    for(let i=0; i < quizzesDoUser.length;i++){
        if(quizzesDoUser[i].id === quizz.id){
            return true
        }
    }

    return false 
}


function obterQuizzPersistino(){
    let dados = localStorage.getItem("quizzes")
    if(dados !== null){
        const dadosDesentralizados = JSON.parse(dados)
        return dadosDesentralizados
    }
    else{
        return []
    }
}


// const dadosLocalStorage = []
function salvarLocalStorageID(resposta){

    const dadosLocalStorage =  obterQuizzPersistino()

    dadosLocalStorage.push({
        id: resposta.data.id,
        key: resposta.data.key,
        image: imageCapa,
        title: title
    })
    
    //enviar para o localStorage o dados salvo do dadosLocalStorage
    localStorage.setItem("quizzes",JSON.stringify(dadosLocalStorage))

    // MostrarQuizesQueOusuarioJaTem();
}
















//delete quizz
 function majeRequestDelete(id, key){
        let recInstace= axios.create({
            headers:{'Secret-Key': key }
        })
        return recInstace.delete("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/" + id)
    }