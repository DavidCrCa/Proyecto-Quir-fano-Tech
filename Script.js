function mostrarInfo(parte) {
  const titulo = document.getElementById("titulo");
  const descripcion = document.getElementById("descripcion");
  const imagen = document.getElementById("imagen");
  const modal = document.getElementById("modal");
 
  const info = {
    cpu: {
      titulo: "Procesador (CPU)",
      texto: "Se coloca alineando las marcas y asegurándolo con cuidado.",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/59/Intel_CPU.jpg"
    },
    ram: {
      titulo: "Memoria RAM",
      texto: "Se inserta presionando hasta que encajen los seguros.",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/RAM_module.jpg"
    },
    disco: {
      titulo: "Disco Duro / SSD",
      texto: "Se instala y conecta con cable de datos y energía.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Solid-state-drive.jpg"
    },
    placa: {
      titulo: "Placa Madre",
      texto: "Es la base donde se conectan todos los componentes.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Motherboard.jpg"
    },
    fuente: {
      titulo: "Fuente de Poder",
      texto: "Distribuye la energía a todos los componentes.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Power_supply_unit.jpg"
    }
  };

  titulo.innerText = info[parte].titulo;
  descripcion.innerText = info[parte].texto;
  imagen.src = info[parte].img;

  modal.classList.remove("oculto");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("oculto");
}

let ordenCorrecto = ["placa", "cpu", "ram", "disco", "fuente"];
let paso = 0;

function ensamblar(event, parte) {
  const estado = document.getElementById("estado");

  if (parte === ordenCorrecto[paso]) {
    paso++;
    event.target.classList.add("correcto");
    event.target.style.pointerEvents = "none";
    actualizarProgreso();

    if (paso === ordenCorrecto.length) {
      estado.innerText = "¡PC ensamblada correctamente!";
    } else {
      estado.innerText = "Paso actual: " + (paso + 1);
    }
  } else {
    event.target.classList.add("incorrecto");
    setTimeout(() => {
      event.target.classList.remove("incorrecto");
    }, 400);
    estado.innerText = "Orden incorrecto";
  }
}

function actualizarProgreso() {
  const porcentaje = (paso / ordenCorrecto.length) * 100;
  document.getElementById("barraProgreso").style.width = porcentaje + "%";
}

document.getElementById("formulario").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("mensajeFinal").innerText =
    "Registro completado. Excelente trabajo";
});
