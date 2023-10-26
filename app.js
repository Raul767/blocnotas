let notas = [];
const listaNotas = document.getElementById("listaNotas");

function crearNota() {
    const newNoteText = document.getElementById("newNote").value;
    if (newNoteText.trim() !== "") {
        const nuevaNota = {
            texto: newNoteText,
            id: new Date().getTime()
        };
        notas.push(nuevaNota);
        mostrarNotas();
        limpiarInput();
    }
}

function mostrarNotas() {
    listaNotas.innerHTML = "";
    notas.forEach(nota => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${nota.texto}</span>
            <button onclick="eliminarNota(${nota.id})" class="delete-button">Borrar</button>
        `;
        listaNotas.appendChild(li);
    });
}

function eliminarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    mostrarNotas();
}

// Función para limpiar el input después de crear una nota
function limpiarInput() {
    document.getElementById("newNote").value = "";
}

notas.push({ texto: "Nota de ejemplo 1", id: new Date().getTime() });
notas.push({ texto: "Nota de ejemplo 2", id: new Date().getTime() + 1 });

mostrarNotas();