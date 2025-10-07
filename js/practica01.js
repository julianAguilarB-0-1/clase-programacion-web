/* obtenerlos objetos*/

const parrafo = document.getElementById('parrafo');
const btnMay = document.getElementById('btnMay');
const btnMin = document.getElementById('btnMin');
const btnAgregar = document.getElementById('btnAgregar');

var col = parrafo.style.color;
var tm = parrafo.style.fontSize;
var cf = parrafo.style.backgroundColor;

function cambiar() {
    parrafo.style.color = 'red';
    parrafo.style.fontSize = '30px';
    parrafo.style.backgroundColor = 'yellow';
}
function normal() {
    parrafo.style.color = col;
    parrafo.style.fontSize = tm;
    parrafo.style.backgroundColor = cf;
}

function mayu() {

    parrafo.textContent = parrafo.textContent.toUpperCase();
}

function minu() {

    parrafo.textContent = parrafo.textContent.toLowerCase();
}

function agregartexto() {
    let text = txtTexto.value;
    parrafo.innerText = parrafo.innerText + " " + text;

}

// codificar loss eventos del parrafo
parrafo.addEventListener('mouseover', cambiar);
parrafo.addEventListener('mouseout', normal);

btnMay.addEventListener('click', mayu);
btnMin.addEventListener('click', minu);

btnAgregar.addEventListener('click', agregartexto);

/* Agregar un boton donde se codifique el evento click y llame a la funcion justificar,
que justificara el del parrafo y le dara un marge 10em */

function justificar() {
    parrafo.style.textAlign = 'justify';
}

function regresar() {
    parrafo.style.textAlign = 'left';
}

btnJustificar.addEventListener('click', justificar);
btnQuitar.addEventListener('click', regresar);


