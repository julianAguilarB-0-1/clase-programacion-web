const opciones = document.getElementById("opciones");
const operador = document.getElementById("lblOp");
const txtNum1 = document.getElementById("txtNum1");
const txtNum2 = document.getElementById("txtNum2");
const resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

// Declarar funciones

// Función para actualizar el operador 
function mostrarOperador() {

    const item = parseInt(opciones.value)
    switch (item) {

        case 1:
            operador.textContent = "+";
            break;
        case 2:
            operador.textContent = "-";
            break;
        case 3:
            operador.textContent = "*";
            break;
        case 4:
            operador.textContent = "/";
            break;
        default:
            operador.textContent = "";
    }
}

function calcular() {

    const num1 = parseFloat(txtNum1.value);
    const num2 = parseFloat(txtNum2.value);

    if(isNaN(num1) || isNaN(num2)){

        resultado.textContent = "Favor de ingresar dos numeros";
        return;
    } else {
        const item = parseInt(opciones.value)
    switch (item) {

        case 1:
            const sum = num1 + num2;
            resultado.textContent = sum;
            break;
        case 2:
            const res = num1 - num2;
            resultado.textContent = res;
            break;
        case 3:
            const multi = num1 * num2;
            resultado.textContent = multi;
            break;
        case 4:
            const divi = num1 / num2;
            resultado.textContent = divi;
            break;
        default:
            operador.textContent = "";
    }
    }

}

// codificar eventos
opciones.addEventListener("change", mostrarOperador);

btnCalcular.addEventListener("click",calcular);