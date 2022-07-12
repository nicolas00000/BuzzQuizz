

let travar = 0
document.onkeydown = teclado
function teclado(e){
    if(!travar == 0){
        return
    }
    if(e.keyCode===13){
        verificarTodosPreenchidos()    
    }

}
function verificarTodosPreenchidos(){
    const titulo = document.getElementById("titulo").value
    const capa = document.getElementById("URLcapa").value
    const qtdPerguntas = document.getElementById("qtdPerguntas").value
    const qtdNiveis = document.getElementById("qtdNiveis").value

    if(!titulo == "" && !capa == "" &&!qtdPerguntas== "" &&!qtdNiveis== "" && qtdNiveis >= 2 && qtdPerguntas >= 3 ){
        criarPerguntas()
        travar++
    }else{
        alert("Preencha todos os campos corretamente")
    }


    function criarPerguntas(){
        const mostrarPergunta = document.querySelector(".container1")
        mostrarPergunta.classList.remove("escondido")
    
        const caixa = document.querySelector(".caixaResponder")
    
        for(let i =0 ; i < qtdPerguntas; i++){
           console.log("rodei")
           caixa.innerHTML += `       
           <div class="cada fechado"> 
            <h4>Pergunta ${i+1} 
             <svg onclick="abrir(this)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </h4>

          <div class="paraEsconder escondendo">
            <input class="campoTexto" id="titulo" type="text" required placeholder="Texto da pergunta">
            <input class="campoTexto" id="titulo" type="text" required maxlength="7" placeholder="Cor de fundo da pergunta">
           
            <h4>Respostas correta</h4>
            <input class="campoTexto" id="titulo" type="text" required placeholder="Texto da resposta">
            <input class="campoTexto" id="titulo" type="text" required placeholder="URL da resposta">
        
            <br>

            
            <h4>Resposta incorreta</h4>
            ${respostasIncorretas()}
           </div>
           </div>
            `
        }
    }

    function respostasIncorretas(){
        return `
        <input class="campoTexto" id="titulo" type="text" required placeholder="Texto resposta incorreta">
        <input class="campoTexto" id="titulo" type="text" required placeholder="URL da resposta">
        
        <input class="campoTexto" id="titulo" type="text" required placeholder="Texto resposta incorreta">
        <input class="campoTexto" id="titulo" type="text" required placeholder="URL da resposta">
        
        <input class="campoTexto" id="titulo" type="text" required placeholder="Texto resposta incorreta">
        <input class="campoTexto" id="titulo" type="text" required placeholder="URL da resposta">
        

        `
    }
}


function abrir(elemento){
    const pai = elemento.parentNode.parentNode
    const filho = pai.children[1]
    pai.classList.toggle("fechado")
    filho.classList.toggle("escondendo") 
}


