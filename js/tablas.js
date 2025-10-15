const id = document.getElementById("idInput");
const nombre = document.getElementById("nombreInput");
const escuela = document.getElementById("escuelaInput");
const tabla = document.getElementById("tabla");
const tbody = document.getElementById("tablaBody");
const btnAgregar = document.getElementById("btnAgregar");

//funciones
function agregarFila(){
    let txtId = id.value.trim();
    let txtNombre = nombre.value.trim();
    let txtEscuela = escuela.value.trim();

    if(!txtId || !txtNombre || !txtEscuela){
        alert("Por favor completa los campos");
        return;
    }
    //crear una nueva fila
    const fila = document.createElement("tr");
    // crear y agregar celdas
    const celdaId = document.createElement("td")
    celdaId.textContent = txtId;
    fila.appendChild(celdaId);

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = txtNombre;
    fila.appendChild(celdaNombre);

    const celdaEscuela = document.createElement("td");
    celdaEscuela.textContent = txtEscuela;
    fila.appendChild(celdaEscuela);

    //agregar la fila a la tabla
    tbody.appendChild(fila);
    tbody.appendChild(tbody);

    //limpiar campos
    document.getElementById("idInput").value = "";
    document.getElementById("nombreInput").value = "";
    document.getElementById("escuelaInput").value = "";
}

//eventos
btnAgregar.addEventListener("click",agregarFila);