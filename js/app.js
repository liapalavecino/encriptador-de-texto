document.getElementById("encriptarBtn").addEventListener("click", function() {
    let inputTexto = document.getElementById("textoEntrada").value;
    if (esTextoValido(inputTexto)) {
        let textoEncriptado = encriptarTexto(inputTexto);
        document.getElementById("textoSalida").value = textoEncriptado;
    } else {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos ni caracteres especiales.");
    }
});

document.getElementById("desencriptarBtn").addEventListener("click", function() {
    let inputTexto = document.getElementById("textoEntrada").value;
    if (esTextoValido(inputTexto)) {
        let textoDesencriptado = desencriptarTexto(inputTexto);
        document.getElementById("textoSalida").value = textoDesencriptado;
    } else {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos ni caracteres especiales.");
    }
});

function encriptarTexto(texto) {
    texto = texto.toLowerCase();
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    texto = texto.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

function esTextoValido(texto) {
    const regex = /^[a-z\s]*$/; // Solo permite letras minúsculas y espacios
    return regex.test(texto);
}

function mensajesIniciales() {
    asignarTextoElemento('h1', 'Encriptador de texto');
    asignarTextoElemento('p', 'Ingresa texto para encriptar');
}

function limpiarCaja() {
    document.querySelector('#palabraUsuario').value = '';
}

function reiniciarJuego() {
    // Lógica para reiniciar el juego, si es necesario
}
