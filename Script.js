function mostrarInfo(parte) {
  const titulo = document.getElementById("titulo");
  const descripcion = document.getElementById("descripcion");
  const imagen = document.getElementById("imagen");
  const modal = document.getElementById("modal");

  if (parte === "cpu") {
    titulo.innerText = "Procesador (CPU)";
    descripcion.innerText = "Se coloca en el zócalo de la placa madre, alineando las marcas y asegurándolo con la palanca.";
    imagen.src = "https://t3.ftcdn.net/jpg/01/20/19/10/360_F_120191062_GiuDkiHSY1ObTgAofwJ5kp1s9uB6ldlr.jpg";
  }

  if (parte === "ram") {
    titulo.innerText = "Memoria RAM";
    descripcion.innerText = "Se inserta en las ranuras de memoria presionando hasta que los seguros laterales encajen.";
    imagen.src = "https://compubit.com.co/wp-content/uploads/2023/04/Porque-es-importante-la-memoria-RAM-2-3-1024x535.jpg";
  }

  if (parte === "disco") {
    titulo.innerText = "Disco Duro / SSD";
    descripcion.innerText = "Se instala en la bahía correspondiente y se conecta con cable SATA y energía.";
    imagen.src = "https://ss628.liverpool.com.mx/xl/1108422323.jpg";
  }

  if (parte === "placa") {
    titulo.innerText = "Placa Madre";
    descripcion.innerText = "Se fija al gabinete con tornillos y se conectan todos los componentes principales.";
    imagen.src = "https://periodicotecno.com.mx/wp-content/uploads/2023/12/placa-madre.jpg";
  }

  if (parte === "fuente") {
    titulo.innerText = "Fuente de Poder";
    descripcion.innerText = "Se atornilla al gabinete y distribuye energía a todos los componentes.";
    imagen.src = "https://pcmartcolombia.com/wp-content/uploads/2020/09/PSU-004-1-min-2048x2048.jpg";
  }

  modal.classList.remove("oculto");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("oculto");
}

let ordenCorrecto = ["placa", "cpu", "ram", "disco", "fuente"];

// Si ya había progreso guardado, lo carga
let paso = localStorage.getItem("pasoJuego")
  ? parseInt(localStorage.getItem("pasoJuego"))
  : 0;

function ensamblar(parte) {
  const estado = document.getElementById("estado");

  if (parte === ordenCorrecto[paso]) {
    paso++;
    estado.innerText = "Correcto 👌 Paso actual: " + (paso + 1);

    if (paso === ordenCorrecto.length) {
      estado.innerText = "🎉 ¡PC ensamblada correctamente!";
    }
  } else {
    estado.innerText = "❌ Orden incorrecto, intenta desde el inicio";
    paso = 0;
  }
}
function actualizarPasoVisual() {
const pasoTexto = document.getElementById("pasoActual");

if (paso < ordenCorrecto.length) {
  pasoTexto.innerText = "Paso actual: " + (paso + 1) + 
    " → Sigue: " + ordenCorrecto[paso].toUpperCase();
} else {
  pasoTexto.innerText = " ¡PC ensamblada!";
}
}
actualizarPasoVisual()
function reiniciarJuego() {
  paso = 0;
  localStorage.removeItem("pasoJuego");
  actualizarPasoVisual();
  document.getElementById("estado").innerText = "Juego reiniciado 🔄";
}