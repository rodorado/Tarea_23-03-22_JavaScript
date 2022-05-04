let repeticion;

function calorias() {
  let calorias_seg = 192 / 1800;
  let calorias_totales = 0;
  repeticion = setInterval(function () {
    console.log(
      `Cantidad de calorías totales quemadas en este viaje: ${(calorias_totales =
        calorias_totales + calorias_seg)}`
    );
  }, 1000);
}

const detenerBici = function () {
  clearInterval(repeticion);
};