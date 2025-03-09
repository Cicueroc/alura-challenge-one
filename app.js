// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let participantes = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validación de que el nombre no este vacio
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validación que el nombre no tenga caracteres especiales
    if (!/^[A-Za-zÁ-Úá-ú\s]+$/.test(nombre)) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
        return;
    }

    // Validación que no sea nombre repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre a la lista y participantes. 
    amigos.push(nombre);
    participantes.push(nombre);
    inputAmigo.value = ""; // Limpia el campo de texto

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * participantes.length);
    const amigoSecreto = participantes.splice(indiceAleatorio, 1)[0];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML += `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    if (participantes.length === 0) {
        resultado.innerHTML += `<li><strong>Juego Finalizado, Inicia una nueva lista.</strong></li>`;
        setTimeout(reiniciarLista, 3000); // Reiniciar la lista después de 3 segundos
    }
}

function reiniciarLista() {
    amigos = [];
    participantes = [];
    actualizarListaAmigos();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>No quedan participantes, inicia una nueva lista.</li>`;
}
