let nomes = []; 

//Garante que o JavaScript só seja executado depois que o HTML for completamente carregado.
document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById('reiniciar').addEventListener('click', reiniciarSorteio);
    exibirMensagemInicial(); 
}); 


function exibirTextoNaTela(tag, texto) {  
    let campo = document.querySelector(tag); // Seleciona o primeiro elemento que corresponde à tag
    campo.innerHTML = texto; // Atribui o texto dentro do conteúdo HTML do elemento
} 

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Quem é o seu amigo secreto?');  
    exibirTextoNaTela('p', 'Adicione os nomes e descubra!');  
}  

function adicionarNome() {
    let input = document.getElementById('nomeImput'); 
    let nome = input.value.trim(); //trim para garantir que não tenha espaços extras.
    let mensagemErro = document.getElementById('mensagemErro'); 

    mensagemErro.textContent = ''; //para limpar a mensagem do erro anterior. 

    if (nomes.includes(nome)) { 
        mensagemErro.textContent = "Este nome já foi adicionado, tente colocar sobrenome ou apelido";     
    } else if (nome) {
        nomes.push(nome); 
        input.value = ''; 
        mensagemErro.textContent = `Nome "${nome}" adicionado!`;
        mensagemErro.style.color = 'black'; 
    } else {
        mensagemErro.textContent = "Não queremos ninguém sem presentes por aqui, insira um nome válido!"; 
    }
} 

function sortearNome(){
    let mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.textContent = ''; 

    if (nomes.length < 2) {
        exibirTextoNaTela('p', 'Adicione ao menos 2 nomes para o sorteio!');
        return; 
    } 

    let nomeSorteado = nomes[Math.floor(Math.random() * nomes.length)]; 
    exibirTextoNaTela('h1', 'Nome Sorteado!'); 
    exibirTextoNaTela('p', `O nome sorteado foi: ${nomeSorteado}`); 
    document.getElementById('reiniciar').removeAttribute('disabled'); 
} 
    function reiniciarSorteio() {
        let mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.textContent = ''; 
    
        nomes = []; 
        exibirMensagemInicial(); 
        document.getElementById('reiniciar').setAttribute('disabled', true); 
    }

