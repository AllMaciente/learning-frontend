// Exemplo de get Element para mudar a cor
var elemento = document.getElementById("cabecalho");
elemento.style.backgroundColor = 'red';

// Exemplo de createElement
var elemento = document.getElementById("cabecalho");
var h1 = document.createElement('h1');
h1.textContent = 'Exemplo';
h1.style.color = '#1d1d1d'
elemento.append(h1);

// eventos
// Click
var btnExemplo = document.getElementById('btn-click');
btnExemplo.addEventListener('click', () => {
    alert('botão clicado');
}); 

// LER TECLADO
document.addEventListener('keydown',(e) => {
    console.log(event.key);
});