let ttsEnabled = false;

function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}

function toggleGrayscale() {
  document.body.classList.toggle('grayscale-filter');
}


function changeFont(delta) {
  const size = parseInt(window.getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (size + delta) + 'px';
}
function leerTexto(id) {
    const contenedor = document.getElementById(id);
    const texto = contenedor.innerText; // esto toma todo el texto dentro del div
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = "es-ES";
    mensaje.rate = 1;
    mensaje.pitch = 1;
    window.speechSynthesis.cancel(); // cancela cualquier lectura anterior
    window.speechSynthesis.speak(mensaje);
}



