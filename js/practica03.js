const valor = document.getElementById("valor");
const btnIncrementar = document.getElementById("incrementar");
const btnDisminuir = document.getElementById("disminuir");
const btnReiniciar = document.getElementById("reiniciar");
var contador = 0;

//funciones

function incrementar(){
    contador++;
    valor.textContent = contador;
}

function decrementar(){
    contador--;
    valor.textContent = contador;
}

function iniciar(){
    contador=0;
    valor.textContent = contador;
}

// eventos

btnIncrementar.addEventListener("click", incrementar);
btnDisminuir.addEventListener("click",decrementar);
btnReiniciar.addEventListener("click",iniciar)