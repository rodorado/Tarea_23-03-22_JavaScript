/*Crear un script que luego de 3 segundos muestre en el navegador la fecha del día.
Con 30 minutos de bicicleta puedes quemar 192 calorías.
Crear un script que muestre en consola las calorías que vas quemando por segundo simulando que vas en bicicleta.
Crear el script que detendrá el script anterior cuando dejes de andar en bicicleta*/

let fecha = new Date();
const redireccionar = function () {
  setTimeout(function () {
    document.write(
      `hoy es ${fecha.getDate()} de ${fecha.getMonth()} del año ${fecha.getFullYear()}`
    );
  }, 3000);
};
