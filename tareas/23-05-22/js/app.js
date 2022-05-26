let nombres = JSON.parse(localStorage.getItem("nombres")) || [];


let contenedorTarjetas = document.getElementById("contenedor");

const handleSubmit = function (e) {
  e.preventDefault();
  let nombre = document.getElementById("text_nombres");
  nombres.push(nombre.value);
  localStorage.setItem("nombres", JSON.stringify(nombres));

  nombre.value = "";
  nombre.select();
  agregarTarjeta();
};

const agregarTarjeta = function () {
  contenedorTarjetas.innerHTML = "";

  nombres.forEach(function (nombre, index) {
    let tarjeta = document.createElement("div");
    tarjeta.classList = "card mb-1";

    let contenidoTarjeta = `<div
    class="card-body d-flex justify-content-between align-items-center"
  >
    <span>📍 ${nombre}</span>
    <button class="btn btn-danger btn-sm" onclick="borrarNombres(${index})">x</button>
  </div>`;

    tarjeta.innerHTML = contenidoTarjeta;

    contenedorTarjetas.appendChild(tarjeta);
  });
  counter.innerText = nombres.length;
};

function borrarNombres(index) {
  //   console.log(index);
  nombres.splice(index, 1);
  localStorage.setItem("nombres", JSON.stringify(nombres));

  agregarTarjeta();
}

document.getElementById("formulario").addEventListener("submit", handleSubmit);

agregarTarjeta();