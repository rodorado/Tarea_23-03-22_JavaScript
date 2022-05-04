// Crear un script que luego de 3 segundos muestre en el navegador la fecha del día.

const redireccionar = function () {
    setTimeout(function () {
      document.write(
        `hoy es ${fecha.getDate()} del ${fecha.getMonth()} del año ${fecha.getFullYear()}`
      );
    }, 3000);
  }