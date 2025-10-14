const txtpeso = document.getElementById("peso");
const txtaltura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

//funciones

function calcularIMC() {
    let peso = parseFloat(txtpeso.value);
    let altura = parseFloat(txtaltura.value);

    if (isNaN(peso) || isNaN(altura)) {
        resultado.innerHTML = "Por favor, ingrese peso y altura.";
        return;
    }
    if (peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Peso y altura deber ser mayores que cero.";
        return;
    }

    const imc = peso / (altura * altura);
    let nivel = "";
    if (imc < 18.5){
        nivel = "Bajo peso";
    } else if(imc<24.9){
        nivel="Normal";
    } else if(imc<29.9){
        nivel="Sobrepeso";
    } else{
        nivel="Obesidad";
    }
    resultado.innerHTML = "Tu IMC es <strong>" + imc.toFixed(2)+"</strong> - Nivel: <strong>"+nivel+"</strong>."
}

//evento
btnCalcular.addEventListener("click",calcularIMC);